const button = document.getElementById("btn-magic");
let message = document.getElementById("toggle-message");

button.addEventListener("click", () => {
  button.style.background = "var(--primary)";
  button.style.color = "var(--white)";
  button.style.marginBottom = "20px";
  button.textContent = "Bravo !";
  phrase();
});

function phrase() {
  message.innerHTML = `<p> On ne voit bien qu'avec le cœur, l'essentiel est invisible pour les yeux </p> <img src="../assets/img/petit-prince.webp" class="img-prince"/>`;
}
