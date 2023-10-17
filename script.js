let timer = 30;
let score = 0;
let hitRn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function makeBubble() {
  let clutter = "";
  for (let i = 0; i <= 40; i++) {
    let num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}

document.querySelector("#pbtm").addEventListener("click", (dets) => {
  let clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitRn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
