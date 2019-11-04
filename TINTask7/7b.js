/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require('fs');

let directory = process.argv[2];

fs.watch(directory, (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
        fs.readFile(directory + '\\' + filename, (err, data) => {
            if (err) {
                throw error
            }
            console.log(data.toString());
        });
        console.log(`filename provided: ${filename}`);

    } else {
        console.log('filename not provided');
    }
});