const Emitter = require("events");

const emitter = new Emitter();
emitter.on("massage", (data, second, third) => {
  console.log("Вы прислали сообщение " + data);
  console.log("Второй аргумент " + second);
});

const MESSAGE = process.env.message || "";

if (MESSAGE) {
  emitter.emit("massage", MESSAGE, 123);
}
else
{
    emitter.emit("massage", 'Вы не указали сообщение');
}

