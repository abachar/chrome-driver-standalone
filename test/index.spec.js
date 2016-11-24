var expect = require('chai').expect;
var path = require('path');
var fs = require('fs');

var driver = require('../index');

describe('chrome-driver-standalone', function() {
  describe('path', function() {
    it('should define path', function() {
      expect(driver.path).to.exist;
    });

    //it('should be an absolute path', function() {
      // expect(path.resolve(subject.path)).to.equal(subject.path);
    //});

    //it('should exist', function(done) {
      // fs.exists(subject.path, function(exists) {
      //  expect(exists).to.be.true;
      //  done();
      //});
    // });
  });

  describe('version', function() {
    it('should be a valid version', function() {
      expect(driver.version).to.match(/^\d+\.\d+\.\d+$/)
    });
  });
});