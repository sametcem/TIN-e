/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require('fs');
const WATCH_TARGET = './node-desc.txt';
fs.watch(WATCH_TARGET, (eventType, filename) => {
    console.log('File "' + filename + '" was changed: ' + eventType);
});