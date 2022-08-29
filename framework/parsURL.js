module.exports = (baseUrl) => (req, res) => {
    
  const parseURL = new URL(req.url, baseUrl);
  console.log(parseURL);
  req.pathname = parseURL.pathname;
};
