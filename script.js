const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", function () {
  message.textContent = "Yayyy! 💖";
});

noBtn.addEventListener("click", function () {
  message.textContent = "再想一下嘛 🥺";
});
