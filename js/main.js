const searchButton = document.getElementById("button");
const searchInput = document.getElementById("input");
const isMobile = window.innerWidth < 766;
const searchMobileContainer = document.getElementById("header-mobile-search");
const searchDesktopContainer = document.getElementById("header-search");
const basketElement = document.getElementById("basket-element");

searchButton.onclick = () => {
  if (isMobile) {
    const searchContainer = document.getElementById("button-container");
    const isSearchOpen = searchInput.className.includes("header-input--active");
    const searchElement = searchContainer;

    if (searchInput.value.length && isSearchOpen) {
      navigateToCategoryListing();
    }

    if (searchInput.value.length === 0 && isSearchOpen) {
      searchInput.classList.toggle("header-input--active");
      searchButton.classList.toggle("button-active");
      searchContainer.parentElement.removeChild(searchContainer);
      searchDesktopContainer.insertBefore(searchElement, basketElement);
    }

    if (!isSearchOpen) {
      searchContainer.parentElement.removeChild(searchContainer);
      searchMobileContainer.appendChild(searchElement);
      searchInput.classList.toggle("header-input--active");
      searchButton.classList.toggle("button-active");
      searchInput.focus();
    }
  } else {
    const isSearchOpen = searchInput.className.includes("header-input--active");

    if (searchInput.value.length && isSearchOpen) {
      navigateToCategoryListing();
    }
    searchInput.classList.toggle("header-input--active");
    searchButton.classList.toggle("button-active");
    searchInput.focus();
  }
};

searchInput.onkeydown = e => {
  const isSearchOpen = searchInput.className.includes("header-input--active");

  if (e.keyCode === 13 && searchInput.value.length && isSearchOpen) {
    navigateToCategoryListing();
    searchInput.classList.toggle("header-input--active");
    searchButton.classList.remove("button-active");
  }

  if (e.keyCode === 27 && isSearchOpen) {
    searchInput.classList.toggle("header-input--active");
    searchButton.classList.toggle("button-active");
    searchInput.value = "";
  }
};

const navigateToCategoryListing = () => {
  window.location.href = "../html/category-all.html";
  searchInput.value = "";
};
