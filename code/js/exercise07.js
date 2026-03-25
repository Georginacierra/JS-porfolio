const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", (e) => {
  console.log("hola");
  console.log(menu.style.display === "none");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
  e.stopPropagation();
});

document.addEventListener("click", () => {
  console.log("out");
  menu.style.display = "none";
});


menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open");
});



