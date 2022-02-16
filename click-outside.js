const btns = document.querySelectorAll(".card button");
const outerModal = document.querySelector(".modal-outer");
const innerModal = document.querySelector(".modal-inner");

const clickHandler = (e) => {
  const card = e.target.closest("div");
  const title = card.querySelector("h2").textContent;
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const htmlInnerModal = `<img src="${imgSrc}" alt="${desc}" width="600" height="600">         
 <p>${title}</p>`;
  innerModal.innerHTML = htmlInnerModal;
  outerModal.classList.add("open");
};

const closeModal = (e) => {
  if (!e.target.closest(".modal-inner")) {
    outerModal.classList.remove("open");
  }
};

const escClose = (e) => {
  e.key === "Escape" ? outerModal.classList.remove("open") : "";
};

btns.forEach((btn) => btn.addEventListener("click", clickHandler));
outerModal.addEventListener("click", closeModal);
window.addEventListener("keydown", escClose);
