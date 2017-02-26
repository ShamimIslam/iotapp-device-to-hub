Intel® XDK IoT Node.js\* Device to Hub App
==========================================
See [LICENSE.md](LICENSE.md) for license terms and conditions.

This sample application is distributed as part of the
[Intel® XDK](http://xdk.intel.com). It can also be downloaded
or cloned directly from its git repo on the
[public Intel XDK GitHub\* site](https://github.com/gomobile).

For help getting started developing applications with the
Intel XDK, please start with
[the Intel XDK documentation](https://software.intel.com/en-us/xdk/docs).

See also, the
[mraa library documentation](https://iotdk.intel.com/docs/master/mraa/index.html)
for details regarding supported boards and the mraa library API and the
[upm library documentation](https://iotdk.intel.com/docs/master/upm/) for
information regarding the upm sensor and actuator library APIs.

App Overview
------------
This sample app demonstrates how to pass sensor data from an IoT Device and
send it to your Microsoft Azure Hub account. The hub  encrypts the data you
send and allows you to store and retrieve the information received from IoT
device by another device or system.

> **NOTE:** You can get your Microsoft Azure Hub membership by going to the
> [Azure Portal](https://portal.azure.com). For this app you do not need a full
> subscription to the service - you can use the free trial. For a detailed
> tutorial on how to setup your Azure IoT hub, see:
> [Setup Azure IoT Hub](https://github.com/Azure/azure-iot-sdks/blob/master/doc/setup_iothub.md)

Hardware Requirements
---------------------
* Compatible IoT development board with the appropriate I/O sensors.

* [Seeed Studio\* “Base Shield”](https://www.seeedstudio.com/item_detail.html?p_id=1855)
  or equivalent.

![Intel Edison CPU module mounted on an Intel Edison breakout board](/img/breakoutBoard.JPG)

Getting Started
---------------
Download and unzip a copy of the project files and put it into an easily
accessible folder on your workstation.

* Start the Intel XDK and select "Open an Intel XDK Project” from the Projects
  tab (see the image below).

* Locate the folder that contains the "IoT-Device-to-Hub" project you downloaded
  and unzipped and select the file with the `.xdk` extension.

![How to open an Intel XDK project](/img/projectExamp.png)

### Modifying the Source Files

Modify the `connection.json` file to specify the connection string information
that is unique to your hub. The information shown below will not work, you must
change it to match your IoT hub connection identification information:

```JavaScript
{
    "HOST_NAME": "your-hostname",
    "SHARE_ACCESS_NAME": "shared-access-key-name",
    "FIRST_KEY": "shared-access-key"
}
```

To get your shared access key, goto your IoT Hub > Shared Access Policies >
IoT Hub Owner > Connection String - Primary.

![Share Policies Page](/img/sharedAccess.png)
![Key Page](/img/key.png)

Connecting Hardware
-------------------
Once your source files are ready to go, you can go ahead and connect your
device in the following manner.

1. Connect your Base Shield to your IoT device --
   ![base shield attached to an Intel Edison](/img/fullDiagram.JPG)

2. Make sure your voltage switch is set to 5 Volts --
   ![closeup look at the volt switch](/img/voltSwitch.JPG)

3. Attach your temperature sensor to the A0 port on the base shield --
   ![temperature sensor on the base shield](/img/sensors.JPG)

4. Plug in your power adapter --
   ![power and USB connections for an Intel Edison Board](/img/cords.JPG)

Running the Project
-------------------
After all hardware and software configuration are complete, be sure to
configure your IoT board's network interface so it has access to the Internet.

Important App Files
-------------------
* main.js
* package.json
* connection.json

Important Project Files
-----------------------
* README.md
* LICENSE.md
* \<project-name\>.xdk

Tested IoT Node.js Platforms
----------------------------
* [Intel® Galileo Board for Arduino](http://intel.com/galileo)
* [Intel® Edison Board for Arduino](http://intel.com/edison)

This sample can run on other IoT [Node.js](http://nodejs.org) development
platforms, that include the appropriate sensor hardware, but may require
changes to the I/O initialization and configuration code in order to work on
those other platforms.
