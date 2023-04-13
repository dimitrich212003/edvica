/*
 * main.js
 */

var timeOut = 1;
function goUp() {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, -80);
    timeOut = setTimeout("goUp()", 20);
  } else clearTimeout(timeOut);
}

function show_hide_password(target) {
  var input = document.getElementById("password-input");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

$(function () {
  $('input[name="tabRole"]').click(function () {
    $(this).tab("show");
    $(this).removeClass("active");
  });
  $("#toggle-menu").on("click", function () {
    let th = $(this);
    if (th.hasClass("collapsed")) {
      th.closest("body").css("overflow-y", "hidden");
    } else {
      th.closest("body").css("overflow-y", "scroll");
    }
  });
  $("#filter_mobile").on("click", function () {
    let th = $(this);
    $("#collapseFilter").addClass("filter_wrapper__mobile");
    return false;
  });
  $("#filter_close_mobile").on("click", function () {
    let th = $(this);
    $("#collapseFilter").removeClass("filter_wrapper__mobile");
    return false;
  });
  $("#filter_desctop").on("click", function () {
    if ($(this).hasClass("collapsed")) $(this).text("Показать фильтр");
    else $(this).text("Скрыть фильтр");
  });
  $("nav#top-menu > ul")
    .after("<nav id='mobile-menu'>")
    .clone()
    .appendTo("#mobile-menu");
  $("nav#mobile-menu").mmenu(
    {
      extensions: ["fullscreen", "border-none"],
      navbar: {
        title: "Категории",
      },
      navbars: [
        {
          position: "top",
          content: ["close", "title", "prev"],
        },
      ],
      setSelected: true,
    },
    {
      language: "ru",
    }
  );

  $(document).ready(function () {
    $("select:not(#coursesearch-sort)").select2({
      theme: "krajee-bs4",
    });
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 },
        1570: { items: 4 },
      },
    });
  });
});

$("#homework-upload-button").on("click", () => {
  $("#homework-upload-input").trigger("click");
});

$("#homework-upload-input").on("change", function () {
  $("#homework-uploaded-file").text($(this).prop("files")[0].name);
  $("#homework-input-clear-button").removeClass("d-none");
});

$("#homework-input-clear-button").on("click", function () {
  $("#homework-upload-input").val("");
  $("#homework-uploaded-file").text("");
  $(this).addClass("d-none");
});
$(document).ready(function () {
  $(".main-slider").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
  });
  $(".partners-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      200: { items: 2 },
      300: { items: 2, stagePadding: 10 },
      400: { items: 2, stagePadding: 70 },
      500: { items: 2, stagePadding: 50 },
      550: { items: 2, stagePadding: 70 },
      600: { items: 2, stagePadding: 50 },
      768: { items: 3, stagePadding: 50 },
      992: { items: 4 },
      1200: { items: 6 },
      1570: { items: 6 },
    },
  });
});

$(".add-file").on("change", function (e) {
  $(this).prev(".fake-file-name").html(e.target.files[0].name);
});

$(document).ready(function () {
  $(".benefits__item_prev").click(function (event) {
    if ($(".benefits__list").hasClass("spollers")) {
      $(".benefits__item_prev").not($(this)).removeClass("active");
      $(".benefits__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".module__item_title").click(function (event) {
    if ($(".module__list").hasClass("spollers")) {
      $(".module__item_title").not($(this)).removeClass("active");
      $(".module__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".ltc-ff__item_title").click(function (event) {
    if ($(".ltc-ff__list").hasClass("spollers")) {
      $(".ltc-ff__item_title").not($(this)).removeClass("active");
      $(".ltc-ff__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".ltc-ff__item_titlee").click(function (event) {
    if ($(".ltc-ff__list").hasClass("spollers")) {
      $(".ltc-ff__item_titlee").not($(this)).removeClass("active");
      $(".ltc-f__item").not($(this).parent()).removeClass("active");
      $(".ltc-ff__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".ltc-f__item_title").click(function (event) {
    if ($(".ltc-f__list").hasClass("spollers")) {
      $(".ltc-f__item_title").not($(this)).removeClass("active");
      $(".ltc-f__item").not($(this).parent()).removeClass("active");
      $(".ltc-f__item_text").not($(this).next()).slideUp(300);
    }
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active").next().slideToggle(300);
  });
});



$(document).ready(function () {
  if ($(window).width() < 992) {
    $(".footer__title").click(function (event) {
      $(".footer__title").not($(this)).removeClass("active");
      $(".block_item__list").not($(this).next()).slideUp(400);
      $(this).toggleClass("active").next().slideToggle(400);
    });
  }
});

$(document).ready(function () {
  $(".js-owl-3").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1200: { items: 3 },
    },
  });
  $(".js-owl-know").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2, margin: 30 },
      1200: { items: 2, margin: 40, dots: false, nav: true },
      1600: { items: 2, margin: 60, dots: false, nav: true },
    },
  });
});
var readMore = document.querySelectorAll(".readMore")
var mainText = document.querySelectorAll(".item-body__text")
var points = document.querySelectorAll(".points-content__title")
var text = document.querySelectorAll(".points-content__text")
var images = document.querySelectorAll(".points-main__image")
var mainpage = document.querySelectorAll(".main-page")

var textarea = document.getElementById("message-to-send")

const showHideButton = document.querySelector(".button__hide-show")
const showHideText = document.querySelector(".text__hide-show")
const showHideBlock = document.querySelector(".b-hide-show")

const instrument = document.querySelectorAll(".ltc-instr__item")
const instrumentf = document.querySelectorAll(".ltc-instr__itemf")
const instrumentImage = document.querySelectorAll(".ltc-instr__image")
const instrumentImagee = document.querySelectorAll(".ltc-instr__imagee")
const openn = document.getElementById("open")

const functionalItem = document.querySelectorAll(".ltc-ff__item")
const functional = document.querySelectorAll(".ltc-ff__item_title")
const functional2 = document.querySelectorAll(".ltc-ff__item_titlee")
const funImageee = document.querySelectorAll(".tr__im")
const funMainImageee = document.querySelector(".tr__im.trim-main")
const funImage = document.querySelectorAll(".ltc-ff__img-t")
const funMainImage = document.querySelector(".ltc-ff__img")

const progressBar = document.querySelectorAll("#profor-progress")
const progressFake = document.querySelectorAll(".progress-fake__complete")

const priorNavBtn = document.querySelectorAll(".preor-b__nav_item")
const priorItem = document.querySelectorAll(".preor-b__content_item")

if (priorNavBtn) {
  for (let i = 0; i < priorNavBtn.length; i++) {
    priorNavBtn[i].addEventListener("click", function (e) {
      priorNavBtn.forEach((e) => {
        e.classList.remove("active")
      })
      priorItem.forEach((e) => {
        e.classList.remove("active")
      })
      priorNavBtn[i].classList.add("active")
      priorItem[i].classList.add("active")
    })
  }
}

if (progressBar.length != 0) {
  for (let i = 0; i < progressBar.length; i++) {
    progressFake[i].style.width =
      (progressBar[i].value * 100) / progressBar[i].max + "%"
  }
}

if (functional) {
  for (let i = 0; i < functional.length; i++) {
    functionalItem[i].addEventListener("click", function (e) {
      if (functional[i].classList.contains("active")) {
        funImage.forEach((e) => {
          e.classList.remove("_active")
        })
        funImage[i].classList.add("_active")
        funMainImage.classList.remove("_active")
      } else {
        funImage.forEach((e) => {
          e.classList.remove("_active")
        })
        funImage[i].classList.remove("_active")
        funMainImage.classList.add("_active")
      }
    })
  }
}

if (functional2) {
  for (let i = 0; i < functional2.length; i++) {
    functional2[i].addEventListener("click", function (e) {
      if (funImageee[i].classList.contains("active")) {
        funImageee.forEach((e) => {
          e.classList.remove("active")
        })
        funMainImageee.classList.add("active")
      } else {
        funImageee.forEach((e) => {
          e.classList.remove("active")
        })
        funImageee[i].classList.add("active")
      }
    })
  }
}

function isEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show")
    }
  })
}

let optionss = {
  threshold: [0.5],
}

let obs = new IntersectionObserver(isEntry, optionss)
const hovImages = document.querySelector(".img__list")
if (hovImages) obs.observe(hovImages)

function ifOpen() {
  instrument.forEach((instr) => {
    if (!instr.classList.contains("ssshow")) {
      openn.classList.add("opennn")
    }
  })
}

if (instrument) {
  for (let i = 0; i < instrument.length; i++) {
    instrument[i].addEventListener("mouseover", function (e) {
      // this.classList.add("active");
      instrument[i].classList.add("sssh")
      instrumentImage[i].style.left = "0"
      instrumentImage[i].classList.add("ssshow")
      openn.classList.remove("opennn")
    })
    instrument[i].addEventListener("mouseout", function (e) {
      // this.classList.remove("active");
      instrument[i].classList.remove("sssh")
      instrumentImage[i].style.left = "-100vw"
      instrumentImage[i].classList.remove("ssshow")
      ifOpen()
    })
  }
}

if (instrumentf) {
  for (let i = 0; i < instrumentf.length; i++) {
    instrumentf[i].addEventListener("mouseover", function (e) {
      instrumentImagee.forEach((e) => {
        e.classList.remove("open")
      })
      instrumentf[i].classList.add("sssh")
      instrumentImagee[i].classList.add("open")
    })
    instrumentf[i].addEventListener("mouseout", function (e) {
      instrumentImagee.forEach((e) => {
        e.classList.remove("open")
      })
      instrumentImagee[0].classList.add("open")
      instrumentf[i].classList.remove("sssh")
    })
  }
}

console.log("hello")

function autosize() {
  var el = this
  setTimeout(function () {
    el.style.cssText = "height:auto; padding:0"
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = "height:" + el.scrollHeight + "px"
    el.scrollTop = el.scrollHeight
  }, 0)
}

if (textarea) {
  textarea.addEventListener("input", autosize)
}

if (showHideButton) {
  showHideButton.addEventListener("click", function (e) {
    this.classList.toggle("to-hide")
    if (this.classList.contains("to-hide")) {
      showHideText.innerHTML = "Свернуть"
      showHideBlock.style.display = "block"
    } else {
      showHideText.innerHTML = "Подробнее о преподавателе"
      showHideBlock.style.display = "none"
    }
  })
}

if (points.length != 0) {
  var current = 0
  let timeId = setInterval(function () {
    points[current].classList.remove("_active")
    text[current].classList.remove("_active")
    images[current].classList.remove("_active")
    current++
    if (current >= points.length) current = 0
    points[current].classList.add("_active")
    text[current].classList.add("_active")
    images[current].classList.add("_active")
  }, 2000)
}

for (let i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener("click", function (e) {
    mainText[i].classList.toggle("more")
    if (readMore[i].innerHTML === "Читать целиком") {
      readMore[i].innerHTML = "Скрыть"
    } else {
      readMore[i].innerHTML = "Читать целиком"
    }
  })
}

if ($(".radial-progress")) {
  $(".radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style")
  })

  $(window)
    .scroll(function () {
      $(".radial-progress").each(function (index, value) {
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          percent = $(value).data("percentage")
          radius = $(this).find($("circle.complete")).attr("r")
          circumference = 2 * Math.PI * radius
          strokeDashOffset = circumference - (percent * circumference) / 100
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250)
        }
      })
    })
    .trigger("scroll")
}

// tippy

tippy("#tippy-point-1", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-2", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-3", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-4", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-5", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})

$(document).ready(function () {
  $("#slider_price, #slider_duration").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
  })
})

//========================================================================================================================================================
const mainPage = document.getElementsByClassName('main-page');
if (mainPage) {
  const chart__place = document
    .getElementById("chart__user-place")
    .getContext("2d")
  const myChart__place = new Chart(chart__place, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [23, 22, 9, 7, 6, 5, 5, 4, 19],
          backgroundColor: [
            "#71C97A",
            "#FF604B",
            "#4B93FF",
            "#EDD717",
            "#ED9717",
            "#B5ED17",
            "#6C8F07",
            "#2A078F",
            "#2A078F",
          ],
          borderColor: ["#FFFFFF"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      plugins: {
        tooltip: {
          enabled: false,
          yAlign: "bottom",
          displayColors: false,
          
        },
        legend: {
          display: false,
        },
      },
      onAnimationComplete: function () {
        var ctx = this.chart.ctx
        ctx.font = this.scale.font
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"

        this.datasets.forEach(function (dataset) {
          dataset.points.forEach(function (points) {
            ctx.fillText(points.value, points.x, points.y - 10)
          })
        })
      },
    },
  })
}
function dataMediaQueries(array, dataSetValue) {
  // Получение объектов с медиа запросами
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(",")[0];
    }
  });
  // Инициализация объектов с медиа запросами
  if (media.length) {
    const breakpointsArray = [];
    media.forEach((item) => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // Получаем уникальные брейкпоинты
    let mdQueries = breakpointsArray.map(function (item) {
      return (
        "(" +
        item.type +
        "-width: " +
        item.value +
        "px)," +
        item.value +
        "," +
        item.type
      );
    });
    mdQueries = uniqArray(mdQueries);
    const mdQueriesArray = [];

    if (mdQueries.length) {
      // Работаем с каждым брейкпоинтом
      mdQueries.forEach((breakpoint) => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // Объекты с нужными условиями
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia,
        });
      });
      return mdQueriesArray;
    }
  }
}

function uniqArray(array) {
  return array.filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });
}

let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Создаем событие
      document.dispatchEvent(
        new CustomEvent("slideUpDone", {
          detail: {
            target: target,
          },
        })
      );
    }, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Создаем событие
      document.dispatchEvent(
        new CustomEvent("slideDownDone", {
          detail: {
            target: target,
          },
        })
      );
    }, duration);
  }
};

let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

const spollersArray = document.querySelectorAll("[data-spollers]");
if (spollersArray.length > 0) {
  // Получение обычных спойлеров
  const spollersRegular = Array.from(spollersArray).filter(function (
    item,
    index,
    self
  ) {
    return !item.dataset.spollers.split(",")[0];
  });
  // Инициализация обычных спойлеров
  if (spollersRegular.length) {
    initSpollers(spollersRegular);
  }
  // Получение спойлеров с медиа запросами
  let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
  if (mdQueriesArray && mdQueriesArray.length) {
    mdQueriesArray.forEach((mdQueriesItem) => {
      // Событие
      mdQueriesItem.matchMedia.addEventListener("change", function () {
        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
      initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
    });
  }

  // Инициализация
  function initSpollers(spollersArray, matchMedia = false) {
    spollersArray.forEach((spollersBlock) => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add("_spoller-init");
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove("_spoller-init");
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  }
  // Работа с контентом
  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
    if (spollerTitles.length) {
      spollerTitles = Array.from(spollerTitles).filter(
        (item) => item.closest("[data-spollers]") === spollersBlock
      );
      spollerTitles.forEach((spollerTitle) => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute("tabindex");
          if (!spollerTitle.classList.contains("_spoller-active")) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute("tabindex", "-1");
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }
  function setSpollerAction(e) {
    const el = e.target;
    if (el.closest("[data-spoller]")) {
      const spollerTitle = el.closest("[data-spoller]");
      const spollersBlock = spollerTitle.closest("[data-spollers]");
      const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
      const spollerSpeed = spollersBlock.dataset.spollersSpeed
        ? parseInt(spollersBlock.dataset.spollersSpeed)
        : 500;
      if (!spollersBlock.querySelectorAll("._slide").length) {
        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
          hideSpollersBody(spollersBlock);
        }
        spollerTitle.classList.toggle("_spoller-active");
        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
      }
      e.preventDefault();
    }
  }
  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector(
      "[data-spoller]._spoller-active"
    );
    const spollerSpeed = spollersBlock.dataset.spollersSpeed
      ? parseInt(spollersBlock.dataset.spollersSpeed)
      : 500;
    if (
      spollerActiveTitle &&
      !spollersBlock.querySelectorAll("._slide").length
    ) {
      spollerActiveTitle.classList.remove("_spoller-active");
      _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
    }
  }
}

// ========================================================================================================================================================

if (document.querySelector(".side-nav")) {
  const navigationItem = document.querySelectorAll(".side-nav__item");
  const navigationPage = document.querySelectorAll(".ntr__content-item");

  for (let i = 0; i < navigationItem.length; i++) {
    navigationItem[i].addEventListener("click", function (e) {
      // Если нужна прокрутка наверх раскомментировать:
      // goUp();

      navigationPage.forEach((el) => {
        el.classList.remove("_active");
      });
      navigationItem.forEach((el) => {
        el.classList.remove("highlighted");
      });

      navigationItem[i].classList.add("highlighted");
      navigationPage[i].classList.add("_active");
    });
  }
}
$(document).ready(function(){
  $('.js-owl-mob2').owlCarousel({
    loop:false,
    margin: 16,
    nav: false,
    dots: true,
    responsive:{
      0:{items:2},
      600:{items:3},
      992:{items:4},
      1200:{
        items: 6
      },
      1500: {
        items: 6,
        margin: 24
      }
    }
  });

  $('.js-owl-you').owlCarousel({
    loop:false,
    margin: 16,
    nav: false,
    dots: true,
    responsive:{
      0:{items:1},
      768:{items:2},
      992:{items:3},
      1200:{
        items: 3,
        margin: 24
      }
    }
  });

});
$(document).ready(function(){
  $('.js-owl-privilege').owlCarousel({
    loop: false,
    rewind: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    autoHeight: true
  });

  let owl = $('.js-owl-privilege2');

  function owlInitP(){
    if($(window).width()<1200){
      owl.addClass('owl-carousel owl-theme');
      owl.owlCarousel({
        loop: false,
        rewind: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        autoHeight: true
      });
    }else{
      owl.trigger('destroy.owl.carousel');
      owl.removeClass('owl-carousel owl-theme');
    }
  }

  $(window).resize(function(){
    owlInitP();
  }).resize();

  $('#cl-parent .collapse').on('show.bs.collapse',function(){
    $('#land-teacher-img-change').attr('src',$(this).data('img'));
  });

});
new Swiper(".points-main_mobile__slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
  },

  spaceBetween: 30,

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

new Swiper(".courses__swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      autoHeight: true,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});
new Swiper(".partners__slider", {
  // Optional parameters
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
  },

  // // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
new Swiper(".skillbox-stage__slider", {
  // Optional parameters
  spaceBetween: 12,
});
new Swiper(".reviews__slider", {
  // Optional parameters
  spaceBetween: 24,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    430: {
      slidesPerView: 1.2,
    },
  },
});

new Swiper(".mentors__slider", {
  // Optional parameters
  breakpoints: {
    0: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
new Swiper(".subjects__slider", {
  // Optional parameters
  loop: true,

  slidesPerView: "auto",

  breakpoints: {
    0: {
      spaceBetween: 8,
    },
    768: {
      spaceBetween: 16,
    },
  },
});

new Swiper(".sertificat-s__slider", {
  // Optional parameters

  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },
  // breakpoints: {
  //   0: {
  //     spaceBetween: 8,
  //   },
  //   768: {
  //     spaceBetween: 16,
  //   },
  // },
});
new Swiper(".courses__swiperr", {
  // Optional parameters

  slidesPerView: "auto",

  spaceBetween: 12,
  // breakpoints: {
  //   0: {
  //     spaceBetween: 8,
  //   },
  //   768: {
  //     spaceBetween: 16,
  //   },
  // },
});
new Swiper(".videos-sl__slider", {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },
  // breakpoints: {
  //   0: {
  //     spaceBetween: 8,
  //   },
  //   768: {
  //     spaceBetween: 16,
  //   },
  // },
});
new Swiper(".videos-sl2__slider", {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },
});
new Swiper(".ltc-h__slider", {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 24,
});
new Swiper(".ltc-gls__slider", {
  // Optional parameters
  pagination: {
    el: ".swiper-pagination-grey",
    clickable: true,
  },
});
new Swiper(".ltc-w__slider", {
  // Optional parameters

  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination-grey",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

new Swiper(".abus-fw__slider", {
  // Optional parameters
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".abus-h__slider", {
  // Optional parameters

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },
});

new Swiper(".ben-b__slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
});
new Swiper(".help-b__slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
});
const rangeInput = document.querySelector(".range__input");
const rangeProgress = document.querySelector(".range__progress");
const rangeInfo = document.querySelector(".range__input-info");
const rangeInputP = document.querySelector(".range__input-p");
const rangeProgressP = document.querySelector(".range__progress-p");
const rangeInfoP = document.querySelector(".range__input-info-p");

const steps = document.querySelectorAll(".step-s");
const stepNumbers = document.querySelectorAll(".step-n__number");
const stepNumberCircles = document.querySelectorAll(".step-n__number_circle");
const stepGaps = document.querySelectorAll(".step-n__gap");
const form = document.querySelector(".step-s__form");
const prevBtn = document.querySelectorAll(".step-s__prev_btn");
const nextBtn = document.querySelectorAll(".step-s__next_btn");

const moduleInputs = document.querySelectorAll(".module-s__input");
const moduleBodyLong = document.querySelector(".module-s__body");
const moduleBodyShort = document.querySelector(".module-s__body-short");

const conversionBtn = document.querySelectorAll(".bacc");
const conversionBlock = document.querySelectorAll(".item-conversion");

const lastNumber = document.querySelector(".last-numberr");
const resss = document.querySelector(".item-conv__button-reset");

conversionBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    conversionBlock.forEach((block) => {
      block.classList.toggle("dis-n");
    });
  });
});

if (moduleInputs) {
  moduleInputs.forEach((item) => {
    item.oninput = function () {
      if (this.value == "yes") {
        moduleBodyShort.style.display = "none";
        moduleBodyLong.style.display = "block";
      } else {
        moduleBodyShort.style.display = "block";
        moduleBodyLong.style.display = "none";
      }
    };
  });
}

function moduleInputUpdate() {
  console.log(moduleInputs.value);
}

if (rangeInput) {
  rangeInput.oninput = function () {
    let valu = this.value - 1;
    valu = (valu / 4) * 100;
    rangeProgress.style.width = valu + "%";
    rangeInfo.value = this.value;
  };

  rangeInfo.oninput = function () {
    rangeProgress.style.width = this.value * 25 - 25 + "%";
    rangeInput.value = this.value;
  };

  $(".only-numbers").keypress(function (event) {
    event = event || window.event;
    if (
      event.charCode &&
      event.charCode != 0 &&
      (event.charCode < 48 || event.charCode > 57)
    )
      return false;
  });

  $(".only-numberss").keypress(function (event) {
    event = event || window.event;
    if (
      event.charCode &&
      event.charCode != 0 &&
      (event.charCode < 49 || event.charCode > 53)
    )
      return false;
  });
}

if (rangeInputP) {
  rangeInputP.oninput = function () {
    rangeProgressP.style.width = this.value + "%";
    rangeInfoP.value = this.value + "%";
  };

  rangeInfoP.oninput = function (params) {
    rangeProgressP.style.width = this.value * 1 + 1 + "%";
    rangeInputP.value = this.value;
  };

  $(".only-numbers").keypress(function (event) {
    event = event || window.event;
    if (
      event.charCode &&
      event.charCode != 0 &&
      (event.charCode < 48 || event.charCode > 57)
    )
      return false;
  });
}

function formSteps() {
  if (form) {
    form.addEventListener("submit", (e) => e.preventDefault());
  }

  var formStepIndex = 0;

  if (prevBtn.length > 0 || nextBtn.length > 0) {
    for (let i = 0; i < prevBtn.length; i++) {
      prevBtn[i].addEventListener("click", () => {
        formStepIndex--;
        updateFormSteps();
      });
    }
    for (let i = 0; i < nextBtn.length; i++) {
      nextBtn[i].addEventListener("click", () => {
        formStepIndex++;
        updateFormSteps();
      });
    }
  }

  for (let i = 0; i < steps.length; i++) {
    stepNumbers[i].addEventListener("click", () => {
      formStepIndex = i;
      updateFormSteps();
    });
  }

  function updateFormSteps() {
    steps.forEach((step) => {
      step.classList.contains("active") && step.classList.remove("active");
    });
    stepNumbers.forEach((step) => {
      step.classList.contains("active-number") &&
        step.classList.remove("active-number");
    });

    steps[formStepIndex].classList.add("active");
    stepNumbers[formStepIndex].classList.add("active-number");
    if (formStepIndex != 0) {
      for (var i = formStepIndex - 1; i >= 0; i--) {
        stepNumbers[i].classList.add("passed");
        if (stepGaps.length > 0) {
          stepGaps[i].classList.add("passed");
        }
      }
    }
    if (formStepIndex != steps.length - 1) {
      for (var i = formStepIndex + 1; i < steps.length; i++) {
        stepNumbers[i].classList.contains("passed") &&
          stepNumbers[i].classList.remove("passed");
        if (stepGaps.length > 0) {
          stepGaps[i - 1].classList.contains("passed") &&
            stepGaps[i - 1].classList.remove("passed");
        }
      }
    }
    if (prevBtn.length > 0 || nextBtn.length > 0) {
      if (formStepIndex === 0) {
        prevBtn.forEach((button) => {
          button.style.opacity = "0";
          button.style.pointerEvents = "none";
        });
      } else {
        prevBtn.forEach((button) => {
          button.style.opacity = "1";
          button.style.pointerEvents = "all";
        });
      }
      if (lastNumber) {
        if (lastNumber.classList.contains("active-number")) {
          document.body.classList.add("main-purpure");
          resss.classList.add("res-white");
        } else {
          document.body.classList.remove("main-purpure");
          resss.classList.remove("res-white");
        }
      }
      if (formStepIndex === steps.length - 1) {
        nextBtn.forEach((button) => {
          button.innerHTML = "Готово";
        });
      } else {
        nextBtn.forEach((button) => {
          button.innerHTML = "Далее";
        });
      }

      if (nextBtn[formStepIndex].innerHTML == "Готово") {
        nextBtn[formStepIndex].addEventListener("click", function () {
          form.submit();
        });
      }
    }
  }

  updateFormSteps();
}

if (document.querySelector(".step-s")) {
  formSteps();
}
// import React from 'react';
// import BubbleSelect, { Bubble } from 'react-native-bubble-select';
// import { Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const App = () => {
//   return (
//     <BubbleSelect onSelect={bubble => console.log('Selected: ', bubble.id)} onDeselect={bubble => console.log ('Deselected: ', bubble.id)} width={width} height={height} > <Bubble id="bubble-1" text="Bubble One" /> <Bubble id="bubble-2" text="Bubble Two" />  <Bubble id="bubble-3" text="Bubble Three" />  <Bubble id="bubble-4" text="Bubble Four" /> </BubbleSelectonSelect>
//   );
// };