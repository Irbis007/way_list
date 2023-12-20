const faqItemTop = document.querySelectorAll(".faq .faq-item .item-top");
const faqItemBody = document.querySelectorAll(".faq .faq-item .item-body");

faqItemTop.forEach((item, i) => {
  item.addEventListener("click", () => {
    faqRemoveActive(faqItemTop);
    faqRemoveActive(faqItemBody);
    item.classList.add("active");
    faqItemBody[i].classList.add("active");
  });
});

function faqRemoveActive(list) {
  list.forEach((item) => {
    item.classList.remove("active");
  });
}

// Price Slider

const priceSliderWrapper = document.querySelector(".prices_list-wrapper");
const pricesSliderWrapper = document.querySelector(".prices .prices-list");
const pricesSliderItems = document.querySelectorAll(".prices-list .prices-item");
const pricesTabsWrapper = document.querySelector(".prices .prices-tabs");
const priceBtnPrev = document.querySelector(".prices .button-prev.prices-button");
const priceBtnNext = document.querySelector(".prices .button-next.prices-button");
let pricesTabs;
let pricesOffset = 0;
const pricesSliderItemWidth = pricesSliderItems[0].clientWidth;
const pricesSliderStep = pricesSliderItemWidth + 15;

const pricesGapSize = 15;
const pricesGapCount = pricesSliderItems.length - 1;
const pricesWindowWidht = window.innerWidth;
const pricesContainerWidth = document.querySelector(".container").clientWidth;
const pricesSliderWrapperWidth = priceSliderWrapper.clientWidth;
const pricesSliderItemsShow = pricesContainerWidth / (pricesSliderItemWidth + pricesGapSize);

for (let i = 0; i <= pricesSliderItems.length - Math.round(pricesSliderItemsShow); i++) {
  const item = document.createElement("span");
  if (i == 0) {
    item.classList.add("active");
  }
  pricesTabsWrapper.append(item);
  if (i == pricesSliderItems.length - Math.round(pricesSliderItemsShow)) {
    pricesTabs = document.querySelectorAll(".prices .prices-tabs span");
  }
}

priceBtnPrev.addEventListener("click", (e) => {
  if (pricesOffset > 0) {
    pricesOffset--;
    moveSlider(pricesOffset, pricesSliderWrapper, pricesSliderStep);
    removeTabsActive(pricesTabs);
    pricesTabs[pricesOffset].classList.add("active");
  }
});
priceBtnNext.addEventListener("click", (e) => {
  if (pricesOffset < pricesSliderItems.length - pricesSliderItemsShow) {
    pricesOffset++;
    removeTabsActive(pricesTabs);
    pricesTabs[pricesOffset].classList.add("active");
    if (pricesSliderItems.length - pricesSliderItemsShow > pricesOffset) {
      moveSlider(pricesOffset, pricesSliderWrapper, pricesSliderStep);
    } else {
      moveSlider(pricesOffset - (pricesSliderItemsShow % 1), pricesSliderWrapper, pricesSliderStep);
    }
  }
});

pricesTabs.forEach((item, i) => {
  item.addEventListener("click", () => {
    pricesOffset = i;
    removeTabsActive(pricesTabs);
    pricesTabs[pricesOffset].classList.add("active");
    moveSlider(i, pricesSliderWrapper, pricesSliderStep);
  });
});

// Coments Slider

const comentsSliderListWrapper = document.querySelector(".about_list-wrapper .list");
const comentsSliderItems = document.querySelectorAll(".about .list .item");
const comentsTabsWrapper = document.querySelector(".about .coments-buttons");
let comentsTabs;
let comentsOffset = 0;
const comentsSliderItemWidth = comentsSliderItems[0].clientWidth;

const comentsGapSize = 30;
const comentsSliderStep = comentsSliderItemWidth + comentsGapSize;
const comentsContainerWidth = document.querySelector(".container").clientWidth;
const comentsSliderItemsShow = comentsContainerWidth / (comentsSliderItemWidth + comentsGapSize);

for (let i = 0; i <= comentsSliderItems.length - Math.round(comentsSliderItemsShow); i++) {
  const item = document.createElement("span");
  if (i == 0) {
    item.classList.add("active");
  }
  comentsTabsWrapper.append(item);
  if (i == comentsSliderItems.length - Math.round(comentsSliderItemsShow)) {
    comentsTabs = document.querySelectorAll(".about .coments-buttons span");
  }
}

comentsTabs.forEach((item, i) =>{
  item.addEventListener("click", () => {
    comentsOffset = i;
    removeTabsActive(comentsTabs);
    comentsTabs[comentsOffset].classList.add("active");
    moveSlider(comentsOffset , comentsSliderListWrapper, comentsSliderStep);
  });
})

function moveSlider(offset, sliderContent, step) {
  sliderContent.style.transform = `translateX(-${step * offset}px)`;
}

function removeTabsActive(tabsList) {
  tabsList.forEach((item) => {
    item.classList.remove("active");
  });
}
