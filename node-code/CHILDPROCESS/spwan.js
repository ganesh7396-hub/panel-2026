const { spawn } = require("child_process");
const command = process.platform === "win32" ? "dir" : "ls";
const args = process.platform === "win32" ? ["/b"] : ["-lh"];


const child = spawn(command, args, { shell: true }); // Use `shell: true` for Windows compatibility

child.stdout.on("data", (data) => {
  console.log(`Output: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});

child.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});