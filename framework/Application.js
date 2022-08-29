const http = require("http");
const EvntEmitter = require("events");
const path = require("path");
const bodyParser = require('./bodyParser')

module.exports = class Application {
  constructor() {
    this.emitter = new EvntEmitter();
    this.server = this._createServer();
    this.middlewere = [];
  }

  use(middlewere) {
    this.middlewere.push(middlewere);
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {
        this.emitter.on(this._getRouterMask(path, method), (req, res) => {
          const handler = endpoint[method];
          
          handler(req, res);
        });
      });
    });
  }

  _createServer() {
    return http.createServer((req, res) => {

        bodyParser(req,res, ()=>
        {
            
            this.middlewere.forEach((middlewere) => middlewere(req, res));
            
            const emitted = this.emitter.emit(
                this._getRouterMask(req.pathname, req.method),
                req,
                res
              );
              if (!emitted) {
                res.end();
              }
        })

    });
  }

  _getRouterMask(path, method) {
    return `[${path}]:[${method}]`;
  }
};
