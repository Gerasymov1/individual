const addingButton = document.getElementById("adding-button");
const basketCount = document.getElementById("basket-count");
const sizesList = document.getElementsByClassName("size");
let count = 0;

addingButton.onclick = () => {
  count++;
  basketCount.innerHTML = count;
  console.log(count);
};

const handleSizeClick = e => {
  for (let i = 0; i < sizesList.length; i++) {
    if (sizesList[i] === e.target) {
      const isActive = sizesList[i].classList.contains("size--active");
      if (!isActive) {
        const activeSizes = document.getElementsByClassName("size--active");
        activeSizes.length && activeSizes[0].classList.remove("size--active");
        sizesList[i].classList.add("size--active");
      }
    }
  }
};

for (let i = 0; i < sizesList.length; i++) {
  sizesList[i].addEventListener("click", handleSizeClick);
}

const imageDetailLink = document.getElementsByClassName("img-detail");
const boxImage = document.getElementById("get");

const handleImgClick = e => {
  e.preventDefault();
  for (let i = 0; i < imageDetailLink.length; i++) {
    if (imageDetailLink[i] === e.target) {
      const prevImgLink = boxImage.getAttribute("src");
      const nextImgLink = imageDetailLink[i].getAttribute("src");
      imageDetailLink[i].setAttribute("src", prevImgLink);
      boxImage.setAttribute("src", nextImgLink);
    }
  }
};

for (let i = 0; i < imageDetailLink.length; i++) {
  imageDetailLink[i].addEventListener("click", handleImgClick);
}
