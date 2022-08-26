const http = require("http");
const events = require("events");

const emitter = new events();

const PORT = process.env.PORT || 5000;

class Router {
  constructor() {
    this.endpoint = {};
  }

  request(method = "GET", path, handler) {
    if (this.endpoint[path]) {
      this.endpoint[path] = {};
    }

    const endpoint = this.endpoint[path];

    if (this.endpoint[method]) {
      throw new Error(`[${method}] по адресу ${path} уже существует`);
    }

    this.endpoint[method] = handler;

    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res);
    });
  }

  get(path, handler) {
    this.request("GET", path, handler);
  }
  post(path, handler) {
    this.request("POST", path, handler);
  }
  put(path, handler) {
    this.request("PUT", path, handler);
  }
  delete(path, handler) {
    this.request("DELETE", path, handler);
  }
}

const router = new Router();

router.get("/users", (req, res) => {
  res.end("YOU SEND REQUESTS TO /users");
});

router.post("/posts", (req, res) => {
  res.send("YOU SEND REQUESTS TO /posts");
});

const server = http.createServer((req, res) => {
  emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
  res.end(req.url);
});

server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
