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
Btn.forEach((item) => {
  item.addEventListener("click", () => {
    Btn.forEach((item2) => item2.classList.remove("content-acctive"));
    item.classList.add("content-acctive");
  });
});
