const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const path = require("path");

// fs.mkdir(path.resolve(__dirname,'dir'), (err)=>
// {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка созадана');
// })

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Папка удалена");
// });

// fs.writeFile(path.resolve(__dirname, "text.txt"), "5 qwerty 123456", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Файл записан');

//   fs.appendFile(path.resolve(__dirname, "text.txt"), "zxcb 7 8 9 10", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Файл записан');
//   });

// });

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const readFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    });
  });
};
const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
    });
  });
};

// writeFileAsync(path.resolve(__dirname, "test.txt"), "some data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(path.resolve(__dirname, "test.txt")).then(() => {
//   console.log("file was remove");
// });

const text = process.env.TEXT || "Some text for ex";

const paths = {
  firstpath: path.resolve(__dirname, "text.txt"),
  secondpath: path.resolve(__dirname, "count.txt"),
};

writeFileAsync(paths.firstpath, text)
  .then(() => readFileAsync(paths.firstpath))
  .then((data) => String(data.split(" ").length))
  .then((count) => writeFileAsync(paths.secondpath, count))
  .then(() => removeFileAsync(paths.firstpath));
