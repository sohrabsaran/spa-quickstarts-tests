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

function writeStringToFile(string, filename) {
  // Check if the file exists.
  if (fs.existsSync(filename)) {
    // If the file exists, overwrite it.
    fs.writeFileSync(filename, string);
  } else {
    // If the file doesn't exist, create it.
    fs.writeFileSync(filename, string, {
      create: true,
    });
  }
}

function modifyFile(filePath, strToInsert, strToExtend) {
  let fileString = fileToString(filePath);
  fileString = fileString.replace(strToInsert, '');
  fileString = fileString.replace(strToExtend, strToExtend + strToInsert);
  writeStringToFile(fileString, filePath);
  console.log('sohrab: here is the modified source code of '+filePath+':\n' +
  fileString);
}

modifyFile('/codecept/lib/scenario.js', 
'\nconsole.log(\'sohrab: watch this!!!!\',{fn,params},\'fn to string: \'+fn)',
'const params = getParamNames(fn) || [];'
)

modifyFile('/codecept/lib/actor.js', 
'\nconsole.log(\'sohrab: watch this!!!!\',{helper,action},\'helper to string: \'+helper+\')',
'const step = new Step(helper, action);'
)

console.log('sohrab: Here is /codecept/lib/step.js:\n' + fileToString('/codecept/lib/step.js'));
var url;
if (process.env.WEBAPP_URL) {
  url = process.env.WEBAPP_URL;
} else if (process.env.SAMPLE_PORT) {
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
      "chrome": {
        "args": ["--no-sandbox", "--disable-setuid-sandbox"]
      }
    }
  },
  "include": {
    //"I": inject().I,
    "input": { "somekey": "somevalue" }//undefined//"./pages/openhome.js"
  },
  "bootstrap": false,
  "mocha": {},
  "name": "webapp-tests"
}