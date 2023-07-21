console.log('sohrab: at top of codecept.conf.js...');

const fs = require('fs');

function fileToString(filePath) {
  try {
    // Read the file contents synchronously (you can use asynchronous methods too)
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return fileContents;
  } catch (err) {
    // Handle any errors that might occur during file reading
    console.error('Error reading the file:', err.message);
    return null;
  }
}


console.log('sohrab: here is the source code of /codecept/lib/scenario.js:\n'+
  fileToString('/codecept/lib/scenario.js'));
var url;
if (process.env.WEBAPP_URL){
  url = process.env.WEBAPP_URL;
} else if (process.env.SAMPLE_PORT){
  url = "http://localhost:" + process.env.SAMPLE_PORT;
} else {
  url = "http://localhost:3000";
}

exports.config = {
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "out",
  "multiple": {
    "basic": {
      "browsers": ["chrome", "firefox"]
    }
  },
  "helpers": {
    "Puppeteer": {  
      "url": url,
      "chrome":{
        "args": ["--no-sandbox", "--disable-setuid-sandbox"]
      }
    }
  },
  "include": {},
  "bootstrap": false,
  "mocha": {},
  "name": "webapp-tests"
}