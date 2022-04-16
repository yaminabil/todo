const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api/todo"], {
      target: "http://localhost:3001",
    })
  );
};
