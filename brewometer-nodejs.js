#!/usr/bin/env node

var path = require('path');
var pkg = require( path.join(__dirname, 'package.json') );
var Bleacon = require('bleacon');

// Parse command line options

var program = require('commander');

program
    .version(pkg.version)
    .option('-p, --port <port>', 'Port on which to listen to (defaults to 3000)', parseInt)
    .parse(process.argv);



Bleacon.on('discover', function(bleacon) {
    switch(bleacon.uuid){
        case 'a495bb10c5b14b44b5121370f02d74de':
        console.log('Red ' + bleacon.major + ',' + bleacon.minor);
        break;

        case 'a495bb20c5b14b44b5121370f02d74de':
        console.log('Green ' + bleacon.major + ',' + bleacon.minor);
        break;

        case 'a495bb30c5b14b44b5121370f02d74de':
        console.log('Black ' + bleacon.major + ',' + bleacon.minor);
        break;

        case 'a495bb40c5b14b44b5121370f02d74de':
        console.log('Purple ' + bleacon.major + ',' + bleacon.minor);
        break;

        case 'a495bb50c5b14b44b5121370f02d74de':
        console.log('Orange ' + bleacon.major + ',' + bleacon.minor);
        break;

        case 'a495bb60c5b14b44b5121370f02d74de':
        console.log('Blue ' + bleacon.major + ',' + bleacon.minor);
        break;

        case 'a495bb70c5b14b44b5121370f02d74de':
        console.log('Yellow ' + bleacon.major + ',' + bleacon.minor);
        break;

        case 'a495bb80c5b14b44b5121370f02d74de':
        console.log('Pink ' + bleacon.major + ',' + bleacon.minor);
        break;
    }
});

Bleacon.startScanning();

//
console.log('Scanning for Brewometers:');