const socket = io("http://localhost:3001");

socket.on("connection");

socket.on("message", (data) => {
  const h1 = document.createElement("h1");
  h1.innerText = data;
  document.getElementById("messages").appendChild(h1);
});

const sendMessages = () => {
  const msgInput = document.querySelector("input");
  const msg = msgInput.value;
  socket.emit("message", msg);
};
