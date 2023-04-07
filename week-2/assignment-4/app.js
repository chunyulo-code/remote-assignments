/*--------------------------------------
    Request-1
--------------------------------------*/
const bannerMsg = document.querySelector(".banner");
bannerMsg.addEventListener("click", () => {
  bannerMsg.textContent = "Have a Good Time!";
});

/*--------------------------------------
    Request-2
--------------------------------------*/
const hamburger = document.querySelector(".hamburger-icon");
const closeBtn = document.querySelector(".closeBtn");
const lists = document.querySelector("#nav-lists");
hamburger.addEventListener("click", () => {
  lists.className = "lists-mobile";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  lists.className = "lists";
});

/*--------------------------------------
    Request-3
--------------------------------------*/
const actionBtn = document.querySelector(".action-button");
const addedBoxes = document.querySelector(".boxes:last-child");
actionBtn.addEventListener("click", () => {
  const totalBoxes = document.querySelectorAll(".box").length;
  htmlToAdd = `
          <div class="box">Content Box ${totalBoxes + 1}</div>
          <div class="box">Content Box ${totalBoxes + 2}</div>
          <div class="box">Content Box ${totalBoxes + 3}</div>
          <div class="box">Content Box ${totalBoxes + 4}</div>
    `;
  addedBoxes.insertAdjacentHTML("beforeend", htmlToAdd);
});
