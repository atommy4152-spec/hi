const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const catImage = document.getElementById("catImage");
const buttonWrap = document.getElementById("buttonWrap");

let noClickCount = 0;
let yesScale = 1;
let noScale = 1;

const noCatImages = ["cat2.png", "cat3.png", "cat4.png", "cat5.png"];

function getRandomNoCatImage() {
  const randomIndex = Math.floor(Math.random() * noCatImages.length);
  return noCatImages[randomIndex];
}

function moveNoButtonRandomly() {
  const wrapWidth = buttonWrap.clientWidth;
  const wrapHeight = buttonWrap.clientHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = wrapWidth - btnWidth;
  const maxY = wrapHeight - btnHeight;

  const randomX = Math.floor(Math.random() * Math.max(1, maxX));
  const randomY = Math.floor(Math.random() * Math.max(1, maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("click", () => {
  noClickCount++;
  catImage.src = getRandomNoCatImage();

  if (noClickCount === 1) {
    message.textContent = "咦，不要那麼快拒絕嘛 🥺";
    moveNoButtonRandomly();
  } else if (noClickCount === 2) {
    message.textContent = "再想一下好不好嘛 💕";

    yesScale = 1.35;
    noScale = 0.85;

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;

    moveNoButtonRandomly();
  } else {
    yesScale += 0.15;
    noScale = Math.max(0.5, noScale - 0.08);

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

yesBtn.addEventListener("click", () => {
  message.textContent = "Yayyyy!!! 💖💖💖";
  catImage.src = "cat.png";
});
