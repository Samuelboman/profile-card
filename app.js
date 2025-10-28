const timeElement = document.querySelector(".time");

function updateTime() {
  const now = Math.floor(Date.now() / 1000);
  timeElement.textContent = `${now} `;
}

updateTime();
setInterval(updateTime, 1000);
