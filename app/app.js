const socket = io("ws://localhost:8080");
const blip = new Audio("./blip.wav");
const messageBody = document.getElementById("mssg");
socket.on("message", (text) => {
  const d = new Date();
  const el = document.createElement("li");
  const p = document.createElement("p");
  el.innerHTML = text;
  p.innerHTML = d.toLocaleTimeString();
  document.querySelector("ul").appendChild(el);
  document.querySelector("ul").appendChild(p);
  messageBody.scrollTop = messageBody.scrollHeight;
});
document.querySelector("button").onclick = (e) => {
  e.preventDefault();
  blip.play();
  const text = document.querySelector("input").value;
  socket.emit("message", text);
  const el = document.getElementById("ip");
  el.value = "";
};
