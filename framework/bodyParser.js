// сделать мидлварину
module.exports = (req, res, )=>
{
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (body) {
        req.body = JSON.parse(body);
        console.log("body parse end");
      }
    });
}