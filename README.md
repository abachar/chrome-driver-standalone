# Chrome Driver Standalone
[![Build status](https://travis-ci.org/abachar/chrome-driver-standalone.svg)](https://travis-ci.org/abachar/chrome-driver-standalone)
[![npm](https://img.shields.io/npm/dt/chrome-driver-standalone.svg)](https://www.npmjs.com/package/chrome-driver-standalone)

> Inspired by [selenium-server-standalone-jar](https://github.com/adamhooper/selenium-server-standalone-jar)

This repository includes selenium ChromeDriver files. It points to them.

## Usage

### Installation

    npm install --save-dev chrome-driver-standalone

### Usage

This is up to you. All you get is:

    var chromeDriver = require('chrome-driver-standalone');
    console.log(chromeDriver.path);    // path to the embeded chrome driver binary
    console.log(chromeDriver.version); // X.YY.0 except for version 2.35.1
