const calcBtn = document.querySelector(".calculateBtn");
const inputNum = document.querySelector(".inputNum");
const answer = document.querySelector(".answer");

function calculation() {
  fetch(`/getData?number=${inputNum.value}`)
    .then((res) => res.text())
    .then((text) => {
      const html = `The answer is <span>${text}</span>`;
      answer.innerHTML = html;
      inputNum.value = "";
    })
    .catch((error) => {
      console.error(error);
    });
}

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  calculation();
});
