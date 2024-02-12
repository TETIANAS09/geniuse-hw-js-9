//-----1----
//Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
//<div id="text"> зникав.

//Result///
/*
document.querySelector(".btn1").addEventListener("click", () => {
  const textElement = document.querySelector("#text");
  textElement.style.display =
    textElement.style.display === "none" ? "block" : "none";
});
*/
//-----2----
//Напишіть такий код, щоб після натискання на кнопку, вона зникала.

//Result//
/*
document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".btn2").style.display = "none";
});
*/
//-----3----
//Створіть дерево, яке показує/приховує дочірні вузли при кліці

//Result//
/*
function toggleChildren(event) {
  const parent = event.target.closest(".parent");
  const children = parent.nextElementSibling;
  children.classList.toggle("hidden");
}
*/
