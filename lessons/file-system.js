const fs = require("fs");
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

fs.writeFile(path.resolve(__dirname, "text.txt"), "5 qwerty 123456", (err) => {
  if (err) {
    throw err;
  }
  console.log('Файл записан');

  fs.appendFile(path.resolve(__dirname, "text.txt"), "zxcb 7 8 9 10", (err) => {
    if (err) {
      throw err;
    }
    console.log('Файл записан');
  });

});

