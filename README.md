Device to Hub App
============================
This sample app demonstrates how to pass sensor data from an IoT Device (Intel Edison or Intel Galileo) and send it to the Microsoft Azure Hub. This hub then encrypts the data and allows the user to either store or read the information received from the device.

Important App Files
---------------------------
* main.js
* package.json
* README.md
* connection.json


Requirements
------------

### Hardware
-	[Intel® Edison Board or Intel® Galileo Board](https://software.intel.com/iot/hardware/devkit) with a Breakout Board
-	Development system with Linux\*, Microsoft\* Windows\* 7+ or Apple\* OS X\*
-   [Seeed Studio\* “Base
    Shield”](https://www.seeedstudio.com/item_detail.html?p_id=1855) or
    equivalent

![Intel Edison CPU module mounted on an Intel Edison breakout board](/img/breakoutBoard.JPG)
### Software
-   [Intel® XDK](http://xdk.intel.com) for your development system (August, 2016
    release or later)
-   A standard ssh client for your dev system (e.g., [PuTTY\* SSH
    client](http://www.putty.org/) for Windows)
-	An Microsoft Azure membership for the Azure Hub

>**NOTE:** You can get your Azure membership by going to the [Portal Website](https://portal.azure.com). For this app you don't need a full subscription to 
>the services - you can get the free trial if you would like. If you would like a
>detailed tutorial on how to set up the events hub please go to the 

Getting Started
---------------

### Opening the Project Files

Download and unzip a copy of the project files and put it in an
easily accessible folder on your workstation.

-   Start the Intel XDK and select "Open an Intel XDK Project” from the Projects
    tab (see the image below).

-   Locate the folder that contains the "IoT-Device-to-Hub" project you downloaded
    and unzipped and select the file with the `.xdk` extension.

![How to open an Intel XDK project](/img/projectExamp.png)

### Modifying the Source Files
You will need to modify your source file to contain the connection string that is unique to your own hub. This string is in the connection.json file. All you will have to do is fill in the information with your own connection string information(host\_name = hostname, shared\_access\_name = shared access key name, first\_key = shared access key) everything else is set up to be filled in with the program. To get your shared access key, you'll first go to your IoT Hub > Shared Access Policies > IoT Hub Owner > Connection String - Primary.

![Share Policies Page](/img/sharedAccess.png)
![Key Page](/img/key.png)

Connecting Hardware
--------------------

Once your source files are ready to go, you can go ahead and connect your device in the following manner. 
	
1. Connect your Base Shield to your Edison Board
![The Base Shield attached to an Intel Edison Board](/img/fullDiagram.JPG)
2. Make sure your volt switch is set to 5v
![Up close look at where the volt switch is](/img/voltSwitch.JPG)
3. Plug in your temperature sensor is plugged into the A0 port on the base shield
![A picture of the temperature sensor on the base shield](/img/sensors.JPG)
4. Plug in your usb cord into the serial port
5. Plug in your power adapter
![Power and USB connections to an Intel Edison Board](/img/cords.JPG)

Running the Project
-------------------

After all of your connections have been made, the last thing you will have to do is set up your wifi connection on the Edison or Galileo (where the Galileo will need to have a an expansion attached for the wifi connection). To do so you can follow this link to the [Intel Developer Zone](https://software.intel.com/en-us/connecting-your-intel-edison-board-using-wifi), which will show you how to connect your device to the internet.

Once your wifi connection is made, connect your work station to the same network. Navigate to the Intel XDK IoT and search for or create a manual connection to the Edison. This will allow you to now upload your project code to the device.