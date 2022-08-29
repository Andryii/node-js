// сделать мидлварину
module.exports = (req, res, callback)=>
{
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (body) {
        req.body = JSON.parse(body);
      }
      callback();

    });
}