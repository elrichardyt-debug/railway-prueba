const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hola, Railway funciona 🚄");
});

server.listen(process.env.PORT || 3000);
