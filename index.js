const app = require("./app");
const https = require("https");

const server = https.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () =>
  console.log(`BaseballAPI has started on port ${PORT}`)
);
