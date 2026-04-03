const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const catImage = document.getElementById("catImage");
const buttonWrap = document.getElementById("buttonWrap");

let noClickCount = 0;

function moveNoButtonRandomly() {
  const wrapWidth = buttonWrap.clientWidth;
  const wrapHeight = buttonWrap.clientHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = wrapWidth - btnWidth;
  const maxY = wrapHeight - btnHeight;

  const randomX = Math.max(0, Math.floor(Math.random() * maxX));
  const randomY = Math.max(0, Math.floor(Math.random() * maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("click", function () {
  noClickCount++;

  if (noClickCount === 1) {
    catImage.src = "cat2.png";
    message.textContent = "咦，不要那麼快拒絕嘛 🥺";
    moveNoButtonRandomly();
  } else if (noClickCount === 2) {
    catImage.src = "cat2.png";
    message.textContent = "再想一下好不好嘛 💕";
    yesBtn.style.transform = "scale(1.35)";
    noBtn.style.transform = "scale(0.85)";
    moveNoButtonRandomly();
  } else {
    const yesScale = 1.35 + (noClickCount - 2) * 0.15;
    const noScale = Math.max(0.55, 0.85 - (noClickCount - 2) * 0.08);

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;

    const messages = [
      "真的不要嗎？🥺",
      "你再考慮一下啦 💗",
      "Yes 比較好對吧 ✨",
      "拜託拜託～💕"
    ];

    message.textContent = messages[(noClickCount - 3) % messages.length];
    moveNoButtonRandomly();
  }
});

yesBtn.addEventListener("click", function () {
  message.textContent = "Yayyyy!!! 💖💖💖";
  catImage.src = "cat.png";
});
