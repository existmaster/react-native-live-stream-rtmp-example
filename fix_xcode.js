const fs = require("fs");

try {
  const rootDir = process.cwd();

  const file = `${rootDir}/node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js`;
  const contentError =
    "if (!version.startsWith('iOS') && !version.startsWith('tvOS')) {";
  const content1Error = "if (version.indexOf('iOS') !== 0) {";
  const contentFixed =
    "if (!version.includes('iOS') && !version.includes('tvOS')) {";

  const data = fs.readFileSync(file, "utf8");

  if (data.indexOf(contentError) === -1 && data.indexOf(content1Error) === -1) {
    throw new Error("-------------> Already fixed.");
  }

  const result = data.replace(contentError, contentFixed);
  fs.writeFileSync(file, result, "utf8");

  const result1 = data.replace(content1Error, contentFixed);
  fs.writeFileSync(file, result1, "utf8");
  console.log("-------------> Fix Xcode 10 Done");
} catch (error) {
  console.error(error.message);
}
