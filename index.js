const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("chat");
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("message", (data) => {
    io.emit("message", data);
  });
});
