const { execFile } = require('child_process');


execFile("node", ["hello.js"], (error, stdout, stderr) => {
    if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Standard Error: ${stderr}`);
    return;
  }

  console.log(`Standard Output:\n${stdout}`);
})