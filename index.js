var package = require('./package.json');
var path = require('path');

var platform = process.platform

if (platform === 'linux') {
    platform += (process.arch === 'x64') ? '64' : '32'
} else if (platform === 'darwin') {
  if (process.arch === 'x64') {
    platform = 'mac64'
  } else {
    console.log('Only Mac 64 bits supported.');
    process.exit(1);
  }
} else if (platform === 'win32') {
  platform += '.exe'
} else {
  console.log('Unexpected platform or architecture:', process.platform, process.arch)
  process.exit(1)
}

module.exports = {
  path: path.resolve(__dirname, 'binaries/chromedriver_' + platform),
  version: package.version
};