// const contentText = document.querySelectorAll(".content-text");

// // contentText.forEach((option, optionIndex) => {
// //   option.addEventListener("click", () => {
// //     document.querySelector(".left-title-font").innerHTML = `/ 0${
// //       optionIndex + 1
// //     }`;

// // //     if (optionIndex === selectedIndex) {
// // //       option.classList.add("content-acctive");
// // //     } else {
// // //       option.classList.remove("content-acctive");
// // //     }
// // //   });
// // });

// contentText.forEach((item, index) => {
//   item.addEventListener("click", () => {});
// });
const Btn = document.querySelectorAll(".content-text");
const BtnNumber = document.querySelector(".left-title-font");

Btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    Btn.forEach((item2) => item2.classList.remove("content-active"));
    item.classList.add("content-active");
    BtnNumber.innerHTML = `/ 0${index + 1}`;
  });
});
