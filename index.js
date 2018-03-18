var package = require('./package.json');
var path = require('path');

function getDriverName() {
  var platform = process.platform;

  if ((platform === 'linux') && (process.arch === 'x64')) {
      platform = 'linux64'
  } else if ((platform === 'darwin') && (process.arch === 'x64')) {
      platform = 'mac64'
  } else if (platform === 'win32') {
    platform += '.exe'
  } else {
    console.log('Unexpected platform or architecture:', process.platform, process.arch)
    process.exit(1)
  }

  return 'chromedriver_' + platform;
}

module.exports = {
  getDriverName: getDriverName,
  path: path.resolve(__dirname, 'binaries', getDriverName()),
  version: package.version
};