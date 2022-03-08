// @ts-check

const fs = require("fs");

// Promise

/**
 * @param {string} fileName
 */
function readFileInPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (error, value) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
}

readFileInPromise(".prettierrc").then((value) => console.log(value));

// Node API
fs.promises
  .readFile(".prettierrc", "utf-8")
  .then((value) => console.log(value));

// async, await
async function main() {
  try {
    const result = await fs.promises.readFile(".prettierrc", "utf-8");
    console.log(result);
  } catch (error) {
    console.log("error:", error);
  }
}
main();
