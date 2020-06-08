const orderButton = document.getElementById("order");
const navigateToSend = () => {
  window.location.href = "../html/thank-you.html";
};

orderButton.onclick = () => {
  navigateToSend();
};

const basketCount = document.getElementById("basket-count");
const deleteButtonList = document.getElementsByClassName(
  "basket-card__delete--btn"
);

const basketCardList = document.getElementsByClassName("basket-card");

const deleteItemFromBasket = e => {
  for (let i = 0; i < deleteButtonList.length; i++) {
    if (deleteButtonList[i] === e.target) {
      basketCardList[i].parentElement.removeChild(basketCardList[i]);
      changeCount();
    }
  }
};

for (let i = 0; i < deleteButtonList.length; i++) {
  deleteButtonList[i].addEventListener("click", deleteItemFromBasket);
}

const productCountInputList = document.getElementsByClassName("input-number");

const changeCount = () => {
  let count = 0;
  for (let i = 0; i < productCountInputList.length; i++) {
    count = count + parseInt(productCountInputList[i].value);
  }
  basketCount.innerHTML = count;
};

for (let i = 0; i < productCountInputList.length; i++) {
  productCountInputList[i].addEventListener("change", changeCount);
}
