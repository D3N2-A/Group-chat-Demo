const socket = io("ws://localhost:8080");
const blip = new Audio("./blip.wav");
socket.on("message", (text) => {
  const d = new Date();
  const el = document.createElement("li");
  const p = document.createElement("p");
  el.innerHTML = text;
  p.innerHTML = d.toLocaleTimeString();
  document.querySelector("ul").appendChild(el);
  document.querySelector("ul").appendChild(p);
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.emit("message", text);
  blip.play();
};
