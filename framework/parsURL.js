module.exports = (baseUrl) => (req, res) => {
  const parseURL = new URL(req.url, baseUrl);

  const params = {};

  parseURL.searchParams.forEach((value, key) => {
    return (params[key] = value);
  });
  req.pathname = parseURL.pathname;
  req.params = params;
};
