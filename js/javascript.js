const Btn = document.querySelectorAll(".content-text");
const BtnNumber = document.querySelector(".left-title-font");

Btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    Btn.forEach((item2) => item2.classList.remove("content-active"));
    item.classList.add("content-active");
    BtnNumber.innerHTML = `/ 0${index + 1}`;
  });
});
