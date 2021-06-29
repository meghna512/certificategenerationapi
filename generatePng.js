const fs = require('file-system');
const text2png = require('text2png');
const pathModule = require('path');

fs.writeFileSync(pathModule.join(__dirname, `./certificates/${process.argv[3]}.png` ), text2png(process.argv[2], {color: 'white'}))