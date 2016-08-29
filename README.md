Iot Device to Hub App
============================
This sample app demonstrates how to pass sensor data from an IoT Device (Intel Edison or Intel Galileo) and send it to the Microsoft Azure Hub. This hub then encrypts the data and allows the user to either store or read the information received from the device.

Important App Files
---------------------------
* main.js
* CreateIdentity.js
* package.json
* README.md


Requirements
------------

### Hardware
-	[Intel® Edison Board or Intel® Galileo Board](https://software.intel.com/iot/hardware/devkit)
-	Development system with Linux\*, Microsoft\* Windows\* 7+ or Apple\* OS X\*

### Software
-   [Intel® XDK](http://xdk.intel.com) for your development system (August, 2016
    release or later)
-   A standard ssh client for your dev system (e.g., [PuTTY\* SSH
    client](http://www.putty.org/) for Windows)
-	An Microsoft Azure membership for the Azure Hub

>**NOTE:** You can get your Azure membership by going to the [Portal Website](https://portal.azure.com). For this app you don't need a full subscription to 
>the services - you can get the free trial if you would like. 
