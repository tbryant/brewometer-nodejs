# brewometer-nodejs
Node.js utility to read a Brewometer

To run, you need Nodejs and Bluetooth 4.0

install using npm
```
$ npm install -g brewometer
```

You should see something like this when you run it:

```
$ brewometer
Scanning for Brewometers:
Yellow 66,1062
Yellow 66,1062
Yellow 66,1062
Orange 69,1020
Orange 69,1020
Yellow 66,1062
Yellow 66,1062
```


## Raspberry Pi
4/9/2016 (this stuff changes rapidly)
Following instructions from https://www.raspberrypi.org/downloads/
I made a Raspbian image for the SD card using this file:
2016-03-18-raspbian-jessie-lite.zip

Once the rPi was up and running, I made sure it connected to Wifi:
https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md


Following instructions similar to https://blog.wia.io/installing-node-js-on-a-raspberry-pi-3
I installed nodejs by downloading the latest node from nodejs.org:
```
wget https://nodejs.org/dist/latest-v5.x/node-v5.10.1-linux-armv6l.tar.gz
tar -xvf node-v5.10.1-linux-armv6l.tar.gz
```
and copying the extracted contents into /usr/local/
```
cd node-v5.10.1-linux-armv6l
sudo cp -R * /usr/local/
```

Install some dependencies for Noble:

https://github.com/sandeepmistry/noble/wiki/Getting-started
```
sudo apt-get install bluetooth bluez libbluetooth-dev libudev
```

## With nodejs installed
OsX, Linux, Windows:
```
npm install -g brewometer
```
On Raspberry pi:
```
sudo npm install --unsafe-perm brewometer
```
On the Raspberry pi, installing brewometer as a user with sudo requires the --unsafe-perm flag, you can also install as root by creating root password:
```
sudo passwd
```
then log in as root, and you can then use
```
npm install -g brewometer
```




