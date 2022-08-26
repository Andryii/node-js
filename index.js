const http = require("http");
const events = require("events");
const { emit } = require("process");
const Router = require("./framework/Router");
const emitter = new events();
const Application = require("./framework/Application");
const PORT = process.env.PORT || 5000;

const app = new Application();

const router = new Router();

router.get("/users", (req, res) => {
  res.end("YOU SEND REQUESTS TO /users");
});

router.get("/posts", (req, res) => {
  res.end("YOU SEND REQUESTS TO /posts");
});

app.addRouter(router);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
