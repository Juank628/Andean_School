let card_1 = document.getElementById("card_1");
let card_2 = document.getElementById("card_2");
let card_3 = document.getElementById("card_3");
let inline_selector = document.querySelector(".inline-selector");
let selector_1 = document.getElementById("selector_1");
let selector_2 = document.getElementById("selector_2");
let selector_3 = document.getElementById("selector_3");

const getInnerSize = () => {
  if (window.innerWidth >= 992) {
    return "large";
  } else if (window.innerWidth >= 768) {
    return "medium";
  } else {
    return "small";
  }
};

const showNews = page => {
  const innerSize = getInnerSize();
  /*large devices*/
  if (innerSize === "large") {
    card_1.className = "news-card show";
    card_2.className = "news-card show";
    card_3.className = "news-card show";
    selector_1.className = "hide";
    selector_2.className = "hide";
    selector_3.className = "hide";
  }
  /*medium devices*/
  if (innerSize === "medium") {
    if (page === "1") {
      card_1.className = "news-card show";
      card_2.className = "news-card show";
      card_3.className = "news-card hide";
      selector_1.className = "selector-circle-active";
      selector_2.className = "selector-circle";
      selector_3.className = "hide";
    } else if (page === "2") {
      card_1.className = "news-card hide";
      card_2.className = "news-card show";
      card_3.className = "news-card show";
      selector_1.className = "selector-circle";
      selector_2.className = "selector-circle-active";
      selector_3.className = "hide";
    }
    /*small devices*/
  } else if (innerSize === "small") {
    if (page === "1") {
      card_1.className = "news-card show";
      card_2.className = "news-card hide";
      card_3.className = "news-card hide";
      selector_1.className = "selector-circle-active";
      selector_2.className = "selector-circle";
      selector_3.className = "selector-circle";
    } else if (page === "2") {
      card_1.className = "news-card hide";
      card_2.className = "news-card show";
      card_3.className = "news-card hide";
      selector_1.className = "selector-circle";
      selector_2.className = "selector-circle-active";
      selector_3.className = "selector-circle";
    } else if (page === "3") {
      card_1.className = "news-card hide";
      card_2.className = "news-card hide";
      card_3.className = "news-card show";
      selector_1.className = "selector-circle";
      selector_2.className = "selector-circle";
      selector_3.className = "selector-circle-active";
    }
  }
};

/*events*/
window.addEventListener("resize", () => showNews("1"));
document.addEventListener("DOMContentLoaded", () => showNews("1"));
inline_selector.addEventListener("click", e => {
  if (/selector*/.test(e.target.id)) {
    showNews(e.target.id.substr(-1));
  }
});
