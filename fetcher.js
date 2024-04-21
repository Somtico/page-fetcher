/* Challenge
  Implement a node app called fetcher.js.

  It should take two command line arguments:

  a URL
  a local file path
  It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/

const request = require("request");
const fs = require("fs");
const readline = require("readline");

const input = process.argv.slice(2);

const url = input[0];
const filePath = input[1];

request(url, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

  // Write to local file
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.log("Error:", error);
      return;
    }

    // Get the file size
    const fileSize = body.length;

    console.log(`Downloaded and saved ${fileSize} bytes to ${input[1]}`);
  });
});
