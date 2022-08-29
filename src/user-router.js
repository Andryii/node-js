const Router = require("../framework/Router");
const controler = require("./user-controler");

const router = new Router();



router.get("/users", controler.getUser);

router.post("/users", controler.createUser);

module.exports = router;
