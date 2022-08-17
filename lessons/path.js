// const path = require("path");

// const fullpath = path.resolve("first", "second.js");
// console.log("Парсинг пути", path.parse(fullpath));
// console.log("разделитель в ОС", path.sep);
// console.log("Проверка на абсолютній путь", path.isAbsolute("first/second"));
// console.log("Название файла", path.basename(fullpath));
// console.log('Расширение файла', path.extname(fullpath));

//----------------------------------

const siteURL = "http://localhost:8080/users?id=5123";

const url = new URL(siteURL);

console.log(url);
