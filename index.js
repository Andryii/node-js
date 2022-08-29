const Application = require("./framework/Application");
const PORT = process.env.PORT || 5000;
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parsejson");
const parseURL = require('./framework/parsURL');
const bodyParser = require("./framework/bodyParser");
const app = new Application();

app.addRouter(userRouter);
app.use(jsonParser);
app.use(bodyParser);
app.use(parseURL('http://localhost:5000'));
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
