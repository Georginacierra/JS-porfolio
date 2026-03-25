const gallery = document
  .getElementById("preview-gallery")
  .querySelectorAll("img");

const showPhoto = document.getElementById("show-photo");

gallery.forEach((image) => {
  image.addEventListener("click", () => {
    const imageSource = image.getAttribute("src");
    showPhoto.innerHTML = `<img src="${imageSource}" alt=""/>`;
  });
});
