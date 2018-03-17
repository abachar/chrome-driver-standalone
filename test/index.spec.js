var expect = require('chai').expect;
var path = require('path');
var fs = require('fs');

var driver = require('../index');

describe('chrome-driver-standalone', function() {
  var original_platform;
  var original_arch;

  describe('version', function() {
    it('should be a valid version', function() {
      expect(driver.version).to.match(/^\d+\.\d+\.\d+$/);
    });
  });

  describe('path', function() {
    it('should be an absolute path', function() {
      expect(path.resolve(driver.path)).to.equal(driver.path);
    });

    it('should exist', function(done) {
      fs.exists(driver.path, function(exists) {
        expect(exists).to.be.true;
        done();
      });
    });
  });

  describe('driver name', function() {
    function given_platfor(platform, arch) {
      Object.defineProperty(process, 'platform', { value: platform });
      Object.defineProperty(process, 'arch', { value: arch });
    }

    beforeEach(function() {
      original_platform = Object.getOwnPropertyDescriptor(process, 'platform');
      original_arch = Object.getOwnPropertyDescriptor(process, 'arch');
    });

    afterEach(function() {
      Object.defineProperty(process, 'platform', original_platform);
      Object.defineProperty(process, 'arch', original_arch);
    });

    it('should use linux x64 driver ', function() {
      given_platfor('linux', 'x64');
      expect(driver.getDriverName()).to.equal('chromedriver_linux64');
    });

    it('should use osx driver ', function() {
      given_platfor('darwin', 'x64');
      expect(driver.getDriverName()).to.equal('chromedriver_mac64');
    });

    it('should use win32 driver ', function() {
      given_platfor('win32');
      expect(driver.getDriverName()).to.equal('chromedriver_win32.exe');
    });
  });
});