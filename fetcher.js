/*
You need to make an http request and wait for the response.
After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
Can use nested callbacks
*/

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Invalid status code:', response.statusCode);
  } else {
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.error('Error writing to file:', error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  }
});
