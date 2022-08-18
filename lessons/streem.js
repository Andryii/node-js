var fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data)=>
// {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// })

const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Закончили читать");
});

stream.on("open", () => console.log("Начали читать"));
stream.on("error", (e) => {
  console.log(e.message);
});

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, "test2.txt")
);

for (let i = 0; i < 20; i++) {
  writableStream.write(i + "\n");
}

writableStream.end();

