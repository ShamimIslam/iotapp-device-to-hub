/**
 * @file
 * Send data to the Microsoft Azure cloud service.
 * See the included README.md file for more information.
 *
 * <https://software.intel.com/en-us/xdk/docs/using-templates-nodejs-iot>
 *
 * @author Giselle Gomez, Intel Corporation
 * @author Anjali Gola, Intel Corporation
 *
 * @copyright (c) 2016-2017, Intel Corporation
 * @license BSD-3-Clause
 * See LICENSE.md for complete license terms and conditions.
 */

/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;


var mraa = require("mraa");
var fs = require('fs');
var path = require('path');
var clientFromConnectionString = require('azure-iot-device-amqp').clientFromConnectionString;
var Message = require('azure-iot-device').Message;
var iothub = require('azure-iothub');

var deviceId = 'myTempMonitorDevice';
var device = new iothub.Device(null);
device.deviceId = deviceId;
var client;

//parse in the information from our connection.json - to be used in connection string building
var connectString = JSON.parse(fs.readFileSync(path.join(__dirname, "connection.json")));

//This needs to be changed to match the connection string provided from YOUR hub - go into the connection.json to do so
var connectionString = "HostName=" + connectString.HOST_NAME + ";" + "SharedAccessKeyName=" + connectString.SHARE_ACCESS_NAME + ";" + "SharedAccessKey=" + connectString.FIRST_KEY + ";" ;
var registry = iothub.Registry.fromConnectionString(connectionString);

var fahrenheit_temperature = -1000;
var celsius_temperature = -1000;
//GROVE Kit A0 Connector --> Aio(0)
var myAnalogPin = new mraa.Aio(0);
var B = 3975;

//grab temperature info
function getTemp () {
    var a = myAnalogPin.read();
    var resistance = (1023 - a) * 10000 / a; //get the resistance of the sensor;
    celsius_temperature = 1 / (Math.log(resistance / 10000) / B + 1 / 298.15) - 273.15;//convert to temperature via datasheet
    fahrenheit_temperature = (celsius_temperature * (9 / 5)) + 32;
    console.log("Fahrenheit Temperature: " + fahrenheit_temperature);
}

function getDeviceInfo(err, deviceInfo) {
  if (deviceInfo) {
        //grabs the deviceID and the device share key
        var connectionString2 = "HostName=" + connectString.HOST_NAME + ";DeviceId=" + device.deviceId+";SharedAccessKeyName="+connectString.SHARE_ACCESS_NAME+";SharedAccessKey="+deviceInfo.authentication.SymmetricKey.primaryKey+";" ;

        //now we can run our message sender
        client = clientFromConnectionString(connectionString2);
        client.open(connectCallback);
  }
}

var connectCallback = function (err) {
  if (err) {
    console.error('Could not connect: ' + err);
  } else {
    console.log('Client connected');

    setInterval(function() {
        getTemp();
        //our message to send
        var message = new Message('Farenheit Temp: ' + fahrenheit_temperature + '\n' + 'Celsius Temp: ' + celsius_temperature);
        client.sendEvent(message, function (err) {
        if (err) console.log(err.toString());
        });

        client.on('message', function (msg) {
            console.log(msg);
            client.complete(msg, function () {
            console.log('completed');
            });
        });
    }, 5000);//we send info every five seconds (new temp)
  }
};

registry.create(device, function(err, deviceInfo, res) {
  if (err) {
    registry.get(device.deviceId, getDeviceInfo);
  }
  if (deviceInfo) {
      getDeviceInfo(err, deviceInfo, res);
  }
});
