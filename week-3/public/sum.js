const calcBtn = document.querySelector(".calculateBtn");
const inputNum = document.querySelector(".inputNum");
const answer = document.querySelector(".answer");

function promiseCalculation() {
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
  asyncCalculation();
});

async function asyncCalculation() {
  try {
    const res = await fetch(`/getData?number=${inputNum.value}`);
    const text = await res.text();
    const html = `The answer is <span>${text}</span>`;
    answer.innerHTML = html;
    inputNum.value = "";
  } catch (e) {
    console.log(e);
  }
}
