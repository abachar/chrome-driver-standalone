# Chrome Driver Standalone
![Build status](https://travis-ci.org/abachar/chrome-driver-standalone.svg)

> Inspired by [selenium-server-standalone-jar](https://github.com/adamhooper/selenium-server-standalone-jar)

This repository includes selenium ChromeDriver files. It points to them.

## Usage

### Installation

    npm install --save-dev chrome-driver-standalone

### Usage

This is up to you. All you get is:

    var chromeDriver = require('chrome-driver-standalone');
    console.log(chromeDriver.path);    // path to the embeded chrome driver binary
    console.log(chromeDriver.version); // X.YY.0
