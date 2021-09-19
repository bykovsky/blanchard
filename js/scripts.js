/*Accordion*/
$(function () {
  $("#accordion")
    .accordion({
      header: "> li > .select-accordion__title",
      collapsible: true,
      heightStyle: "content",
      active: 0,
      animate: 200
    })
});

const heroSlider = new Swiper(".site-slider", {
  direction: "horizontal",
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const heroSliderObj = document.querySelector('.site-slider').swiper;


const gallerySlider = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,

  pagination: {
    el: ".section-gallery .gallery-swiper-pagination",
    type: "fraction",
    clickable: false,
  },
  navigation: {
    nextEl: ".section-gallery .control-button-next-dark",
    prevEl: ".section-gallery .control-button-prev-dark"
  },

  breakpoints: {
    // 450: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    //   grid: {
    //     rows: 1
    //   },
    // },

    480: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1025: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
  a11y: false,
  freeMode: false,
});
const gallerySliderObj = document.querySelector('.gallery-slider').swiper;


// const editionsSlider = new Swiper(".editions-slider", {
//   slidesPerView: 2,
//   slidesPerColumn: 1,
//   spaceBetween: 50,
//   pagination: {
//     el: ".gallery-swiper-pagination",
//     type: "fraction",
//     clickable: false,
//   },
//   navigation: {
//     nextEl: ".control-button-next-dark",
//     prevEl: ".control-button-prev-dark",
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 1,
//     },
//     577: {
//       slidesPerView: 2,
//       spaceBetween: 34,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 34,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 50,
//     },
//     1280: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
//   a11y: false,
// });
// editionsSliderObj = document.querySelector('.editions-slider').swiper;



const partnerSlider = new Swiper(".partners-slider", {
  navigation: {
    nextEl: ".control-button-next-light",
    prevEl: ".control-button-prev-light",
  },
  a11y: false,
  freeMode: false,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
const partnerSliderObj = document.querySelector('.partners-slider').swiper;



/* BIULD EVENTS SLIDER */

const MOBILE_WIDTH = 480;
const START_BREAKPOINT = 480;
// const MOBILE_WIDTH = 425;
const eventsrow = document.querySelector('.events-row');
const allevents = document.querySelector('.allevents');
const eventblock = document.querySelectorAll(".event-block");

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function getWindowHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
}

const eventsSliderParams = {
  paginationClassName: 'events-pagination',
  cardsContainerName: 'events-slider',
  cardsWrapName: 'events-row-wrap',
  card: 'event-block'
};

function activateEventsSlider(params) {
  params.cardsContainer.classList.add("swiper");
  params.cardsWrap.classList.add("swiper-wrapper");
  params.cardsWrap.classList.remove("events-row");


  params.eventsCardsSlider = new Swiper(`.${params.cardsContainerName}`, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: `.${params.cardsContainerName} .${params.paginationClassName}`,
      clickable: true,
    },
    // breakpoints: {
    //   481: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   1024: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   }
    // },

    a11y: false,
    freeMode: false,
    on: {
      beforeInit() {
        document
          .querySelectorAll(`.${params.card}`)
          .forEach((el) => {
            el.classList.add("swiper-slide");
          });
      },

      beforeDestroy() {
        this.slides.forEach((el) => {
          el.classList.remove("swiper-slide");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        });

        // this.pagination.el.remove();
      }
    }
  });
}

function destroyEventsSlider(params) {
  params.eventsCardsSlider.destroy();
  params.cardsContainer.classList.remove("swiper");
  params.cardsWrap.classList.remove("swiper-wrapper");
  params.cardsWrap.removeAttribute("aria-live");
  params.cardsWrap.removeAttribute("id");
  params.cardsWrap.classList.add("events-row");
}

function checkWindowWidth(params) {
  const currentWidth = getWindowWidth();
  params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
  params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);
  if (currentWidth <= START_BREAKPOINT && (!params.eventsCardsSlider || params.eventsCardsSlider.destroyed)) {
    activateEventsSlider(params);
  } else if (currentWidth >= START_BREAKPOINT && params.eventsCardsSlider) {
    destroyEventsSlider(params);
  }
}

checkWindowWidth(eventsSliderParams);

/* EDITIONS SLIDER */
const editionsSlidersets = {
  cardsContainerName: 'editions-slider',
  cardsWrapName: 'editions-wrapper',
  card: 'edition-slide'
};

function activateEditionsSlider(sets) {
  sets.cardsContainer.classList.add("swiper");
  sets.cardsWrap.classList.add("swiper-wrapper");
  //sets.cardsWrap.classList.remove("events-row");


  sets.editionsCardsSlider = new Swiper(`.${sets.cardsContainerName}`, {
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 50,
    pagination: {
      el: ".section-editions .gallery-swiper-pagination",
      type: "fraction",
      // clickable: false,
    },
    navigation: {
      nextEl: ".section-editions .control-button-next-dark",
      prevEl: ".section-editions .control-button-prev-dark",
    },
    a11y: false,
    freeMode: false,
    breakpoints: {
      481: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },

    on: {
      beforeInit() {
        document
          .querySelectorAll(`.${sets.card}`)
          .forEach((el) => {
            el.classList.add("swiper-slide");
          });
      },

      beforeDestroy() {
        this.slides.forEach((el) => {
          el.classList.remove("swiper-slide");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        });
      }
    }
  });
}

function destroyEditionsSlider(sets) {
  sets.editionsCardsSlider.destroy();
  sets.cardsContainer.classList.remove("swiper");
  sets.cardsWrap.classList.remove("swiper-wrapper");
  sets.cardsWrap.removeAttribute("aria-live");
  sets.cardsWrap.removeAttribute("id");
  // sets.cardsWrap.classList.add("events-row");
}

function checkWindowWidthEditions(sets) {
  const currentWidth = getWindowWidth();
  sets.cardsContainer = document.querySelector(`.${sets.cardsContainerName}`);
  sets.cardsWrap = document.querySelector(`.${sets.cardsWrapName}`);
  if (currentWidth <= MOBILE_WIDTH && sets.editionsCardsSlider) {
    destroyEditionsSlider(sets);
  } else if (currentWidth >= MOBILE_WIDTH && (!sets.editionsCardsSlider || sets.editionsCardsSlider.destroyed)) {
    activateEditionsSlider(sets);
  }
}

checkWindowWidthEditions(editionsSlidersets);

function fixGallery() {
  var wrapper = document.querySelector('.gallery-slider__wrapper');
  wrapper.style.width = null;
  // console.log(wrapper);
}


function buildEvents() {
  const ww = getWindowWidth();
  // if (ww < 992 && ww > 567) {

  // if (ww < 992 && ww > 425) {
  //   countEvents = 2;
  // } else if (ww > 992) {
  //   countEvents = 3;
  // } else if (ww < 426) {
  //   countEvents = Infinity;
  // }

  if (ww >= 992) {
    countEvents = 3;
  } else if (ww < 992 && ww > 767) {
    countEvents = 2;
  } else if (ww <= 767 && ww >= 481) {
    countEvents = 1;
    // countEvents = Infinity;
  } else if (ww <= 480) {
    countEvents = Infinity;
  }

  eventblock.forEach((el) => {
    el.classList.remove("event-block--hidden");
  });

  console.log('Ширина экрана: ' + ww + 'px');
  console.log('Кол-во событий в ряд: ' + countEvents);

  for (var i = countEvents; i < eventblock.length; i++) {
    eventblock[i].classList.add('event-block--hidden');
  }
}

function closeModal() {
  document.querySelector('.gallery-modal').classList.remove('is-open');
  document.querySelector('.modal-block').classList.remove('is-open');
}

function closeSearch() {
  document.querySelector('.toggle-search').classList.remove('is-active')
  document.querySelector('.search-form').classList.remove('is-active');
}

function menuHeight() {
  const ww = getWindowWidth();
  const wh = getWindowHeight();
  const headerHeight = document.querySelector('.header').offsetHeight;
  const heroHeight = document.querySelector('.site-hero').offsetHeight;
  const mobileMenu = document.querySelector('.main-nav');

  console.log('Высота .header: ' + headerHeight + 'px');
  console.log('Высота секции .hero: ' + heroHeight + 'px');
  console.log('Высота окна: ' + wh + 'px');

  if (ww < 1200) {
    // mobileMenu.style.height = heroHeight - headerHeight + "px";
    // mobileMenu.style.transform = "translateY(" + headerHeight  + "px)";
    mobileMenu.style.maxHeight = heroHeight - headerHeight + "px";
  }
}

/* EDITIONS SPOILER */
var spolerCheckboxContainer = document.querySelector('.section-editions__checkboxes');
function setEditionSpoilerHeight() {

  var ww = getWindowWidth();
  var activeCheckboxItemes = document.querySelectorAll('.custom-checkbox--active').length;
  var allCheckboxItemes = document.querySelectorAll('.custom-checkbox').length;

  if(activeCheckboxItemes) {
    var itemCheckboxHeight = document.querySelector('.custom-checkbox--active').offsetHeight;
  } else {
    var itemCheckboxHeight = document.querySelector('.custom-checkbox').offsetHeight;
  }

  console.log('ww = ' + ww + ' MOBILE_WIDTH = ' + MOBILE_WIDTH);
  console.log('Активных чекбоксов = ' + activeCheckboxItemes);
  console.log('Всего чекбоксов = ' + allCheckboxItemes);
  console.log('Высота чекбокса = ' + itemCheckboxHeight);

  if (ww <= MOBILE_WIDTH) {
    var spoilerHeight = itemCheckboxHeight * activeCheckboxItemes;
    spolerCheckboxContainer.style.height = spoilerHeight + 'px';
    console.log('Высота контейнера: ' + spoilerHeight);
  } else {
    spolerCheckboxContainer.style.height = null;
    console.log('NOT MOBILE WIDTH');
  }
}

function setEditionSpoilerFullHeight() {
  var ww = getWindowWidth();
  var activeCheckboxItemes = document.querySelectorAll('.custom-checkbox--active').length;
  var allCheckboxItemes = document.querySelectorAll('.custom-checkbox').length;
  var itemCheckboxHeight = document.querySelector('.custom-checkbox').offsetHeight;

  if(activeCheckboxItemes) {
    var itemCheckboxHeight = document.querySelector('.custom-checkbox--active').offsetHeight;
  } else {
    var itemCheckboxHeight = document.querySelector('.custom-checkbox').offsetHeight;
  }
  if (ww <= MOBILE_WIDTH) {
    spolerCheckboxContainer.style.height = itemCheckboxHeight * allCheckboxItemes + 'px';
    console.log('ww = ' + ww + ' MOBILE_WIDTH = ' + MOBILE_WIDTH);
    console.log('setEditionSpoilerFullHeight(): ' + (itemCheckboxHeight * allCheckboxItemes) + 'px');

  }
  // if (ww <= MOBILE_WIDTH) {
  //   spolerCheckboxContainer.style.height = itemCheckboxHeight * allCheckboxItemes + 'px';
  // }
}

function resetEditionsSpoiler() {
  var ww = getWindowWidth();
  if (ww >= MOBILE_WIDTH) {
    document.querySelector('.editions-expand').classList.remove('is-active');
    document.querySelector('.section-editions__checkboxes').classList.remove('is-open');
  }
}

window.addEventListener('resize', function () {
  // document.location.reload();
  // window.location.reload(false);
  // const ww = document.documentElement.clientHeight;

  setEditionSpoilerHeight();
  resetEditionsSpoiler();
  fixGallery();
  buildEvents();
  checkWindowWidth(eventsSliderParams);
  checkWindowWidthEditions(editionsSlidersets);
  menuHeight();
  gallerySlider.init();
})

window.addEventListener('DOMContentLoaded', function () {
  fixGallery();
  buildEvents();
  menuHeight();
  setEditionSpoilerHeight();
  resetEditionsSpoiler();



  /* EVENTS */
  allevents.addEventListener('click', (e) => {
    e.preventDefault();
    eventsrow.classList.toggle('fullrow');
    allevents.closest("section").scrollIntoView({ block: "start", behavior: "smooth" });

    if (eventsrow.classList.contains('fullrow')) {
      allevents.innerHTML = 'Скрыть события';
      allevents.setAttribute("aria-label", "Скрыть события");
      for (var i = 0; i < eventblock.length; i++) {
        eventblock[i].classList.remove('event-block--hidden');
      }
    } else {
      allevents.innerHTML = 'Все события';
      allevents.setAttribute("aria-label", "Показать все события");
      for (var i = countEvents; i < eventblock.length; i++) {
        eventblock[i].classList.add('event-block--hidden');
      }
    }
  });

  /*CUSTOM SELECT*/
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    placeholder: false,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
  });
  document.querySelector('.choices').setAttribute("aria-label", "Выберите тип искусства");

  /* YandexMap */
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      zoom: 15,
      controls: ['geolocationControl', 'zoomControl']
    },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "330px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "260px", right: "20px" }
      }
    );

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -45]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  /* Masked Inputs*/
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  /* Validator */
  new JustValidate('.contact-form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLenght: 10,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          console.log(phone)
          return Number(phone) && phone.length === 10
        },
      },
    },
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Минимум 3 символа',
        maxLenght: 'Максимум 10 символов',
      },
      tel: {
        required: 'Укажите ваш телефон',
        function: 'Только 10 цифр номера',
      },
    },
  })

  /*SCROLL LINKS*/
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.top-nav').offsetHeight;
      //const topOffset = 100;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      var burgerlink = document.querySelectorAll('.main-nav__link');
      for (var i = 0; i < burgerlink.length; i++) {
        var currentLink = e.target;
        for (var link of burgerlink) {
          if (link !== currentLink) {
            link.classList.remove('is-active');
          }
          currentLink.classList.toggle('is-active');
        }
      }

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });

      document.querySelector('.burger').classList.remove('is-active');
      document.querySelector('.main-nav').classList.remove('is-active');
      document.querySelector('.body').classList.remove('body-hidden');

    });
  });

  /*GALLEY LINKS*/
  document.querySelectorAll('.gallery-modal-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const modal = document.querySelector('.gallery-modal');
      const modalBody = document.querySelector('.modal-block');

      let modalImg = document.querySelector('.modal-body__picture');
      let modalAuthor = document.querySelector('.modal-body__author');
      let modalTitle = document.querySelector('.modal-body__title');
      let modalRange = document.querySelector('.modal-body__range');
      let modalDescription = document.querySelector('.modal-body__description');

      let modalDataImg = this.childNodes[1].innerHTML;
      let modalDataAuthor = this.getAttribute('data-author');
      let modalDataTitle = this.getAttribute('data-title');
      let modalDataRange = this.getAttribute('data-range');
      let modalDataDescription = this.getAttribute('data-description');

      modalAuthor.innerHTML = modalDataAuthor;
      modalTitle.innerHTML = modalDataTitle;
      modalRange.innerHTML = modalDataRange;
      modalDescription.innerHTML = modalDataDescription;
      modalImg.innerHTML = modalDataImg;

      document.body.classList.add('body-hidden');
      modal.classList.add('is-open');
      modalBody.classList.add('is-open');


      // let href = this.getAttribute('href').substring(1);

    });
  });

  /* CLOSE MODAL */
  const closeModalArea = document.querySelector('.gallery-modal');
  const closeModalBtn = document.querySelector('.modal-close');

  closeModalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    closeModal();
    document.body.classList.toggle('body-hidden');
  });


  closeModalArea.addEventListener("click", function (e) {
    // if(!e.target.closest('.modal-block')){
    //   closeModal(e.target.closest('.gallery-modal'));
    //   document.body.classList.toggle('body-hidden');
    // }
    if (!e.target.closest('.modal-body')) {
      closeModal(e.target.closest('.gallery-modal'));
      document.body.classList.toggle('body-hidden');
    }
  });

  /* CHECKBOXES */
  var checkboxes = document.querySelectorAll('.custom-checkbox__input');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function (e) {
      var currentCheckbox = e.target;
      // console.log(currentCheckbox);
      currentCheckbox.parentNode.classList.toggle('custom-checkbox--active');
      activeCheckboxItemes = document.querySelectorAll('.custom-checkbox--active').length;

      if (!spolerCheckboxContainer.classList.contains('is-open')) {
        setEditionSpoilerHeight();
      } else {
        setEditionSpoilerFullHeight();
      }
      // if (ww <= MOBILE_WIDTH) {
      //   if (!spolerCheckboxContainer.classList.contains('is-open')) {
      //     spolerCheckboxContainer.style.height = itemCheckboxHeight * activeCheckboxItemes + 'px';
      //   }
      // } else {
      //   console.log('not mobile');
      // }
      // setEditionSpoilerHeight(editionsSpoilerSets.activeItemes);
      // console.log(editionsSpoilerSets.activeItemes);
    });
  }

  var editionsExpand = document.querySelector('.editions-expand');
  editionsExpand.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
    spolerCheckboxContainer.classList.toggle('is-open');
    if (spolerCheckboxContainer.classList.contains('is-open')) {
      setEditionSpoilerFullHeight();
    } else {
      setEditionSpoilerHeight();
    }
  });



  var blockLink = document.querySelectorAll(".false-link");
  for (var i = 0; i < blockLink.length; i++) {
    blockLink[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  var dropDownlink = document.querySelectorAll(".dropdown-link");
  var dropDownBlock = document.querySelectorAll(".dropdown-block");

  for (var i = 0; i < dropDownlink.length; i++) {
    dropDownlink[i].addEventListener("click", function (e) {
      var currentLink = e.target;
      console.log(currentLink);

      for (var link of dropDownlink) {
        if (link !== currentLink) {
          link.classList.remove('active');
        }
        currentLink.classList.toggle('active');
      }


      for (var j = 0; j < dropDownBlock.length; j++) {
        dropDownBlock[j].classList.remove('active');
      }


      if (currentLink.classList.contains('active')) {
        var currentBlock = currentLink.nextElementSibling;
        currentBlock.classList.add('active');
      }
    });
  }


  //Toggle search-popup
  document.querySelector('.header__search-btn').addEventListener('click', function () {
    this.classList.toggle('is-active');
    document.querySelector('.header-search').classList.toggle('is-active');
    document.querySelector('.search-form__input').focus();
    // document.querySelector('.search-popup').classList.toggle('is-active');
    // document.querySelector('.search-popup__input').focus();

    document.querySelector('.burger').classList.remove('is-active');
    document.querySelector('.main-nav').classList.remove('is-active');
    //document.querySelector('.body').classList.remove('body-hidden');
  });

  //Toggle offcanvas menu
  document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('is-active');
    document.querySelector('.main-nav').classList.toggle('is-active');
    // document.querySelector('.body').classList.toggle('body-hidden');

    document.querySelector('.search-popup').classList.remove('is-active');
    document.querySelector('.header__search-btn').classList.remove('is-active');
  });

  document.body.addEventListener("click", function (e) {
    if (!e.target.closest('.header__search-btn')) {
      closeSearch();
    }
  });

  //Tabs for gallery
  var tabNavs = document.querySelectorAll(".catalog-tabs__link");
  var tabPanes = document.querySelectorAll(".catalog-tab__item");

  for (var i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function (e) {
      //e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-path");

      for (var j = 0; j < tabNavs.length; j++) {
        var contentAttr = tabPanes[j].getAttribute("data-target");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("catalog-tabs__link--active");
          tabPanes[j].classList.add("catalog-tab__item--active");
        } else {
          tabNavs[j].classList.remove("catalog-tabs__link--active");
          tabPanes[j].classList.remove("catalog-tab__item--active");
        }
      };
    });
  }

  //Tabs for artists
  var artistTabNavs = document.querySelectorAll(".artists-list__link");
  var artistTabPanes = document.querySelectorAll(".artist-tab");
  const ww = getWindowWidth();

  console.log('Художников: ' + artistTabNavs.length);
  console.log('Блоков: ' + artistTabPanes.length);

  for (var i = 0; i < artistTabNavs.length; i++) {
    artistTabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeArtistTabAttr = e.target.getAttribute("data-artist-path");

      for (var k = 0; k < artistTabNavs.length; k++) {
        var contentArtistAttr = artistTabPanes[k].getAttribute("data-artist-target");
        //console.log(contentArtistAttr);

        if (activeArtistTabAttr === contentArtistAttr) {
          artistTabNavs[k].classList.add("artists-list__link--active");
          artistTabPanes[k].classList.add("artist-block--active");

          /* scroll2artist in mobile*/
          if (ww < 481) {
            const scroll2Target = document.querySelector('.artist-block--active');
            //const top2Offset = document.querySelector('.top-nav').offsetHeight;
            const top2Offset = 60;
            const element2Position = scroll2Target.getBoundingClientRect().top;
            const offset2Position = element2Position - top2Offset;

            window.scrollBy({
              top: offset2Position,
              behavior: 'smooth'
            });
          }
        } else {
          artistTabNavs[k].classList.remove("artists-list__link--active");
          artistTabPanes[k].classList.remove("artist-block--active");
        }
      };
    });
  }

  let accorditions = document.querySelectorAll(".select-accordion__title");
  var tabindex = 1;
  accorditions.forEach((el) => {
    //el.setAttribute("tabindex", tabindex);
    // tabindex++;
    el.removeAttribute("tabindex", tabindex);
  });

  tippy('.tooltip', {
    theme: 'blanchard',
    animation: 'scale',
  });

});

// $(document).keyup(function (e) {
//   if (e.keyCode === 27) {
//     $('.gallery-modal').removeClass("is-open");
//     $('.body').removeClass("body-hidden");
//   }
// });
// $(function () {
//   $.fn.sortList = function () {
//     var mylist = $(this);
//     var listitems = $('li', mylist).get();
//     listitems.sort(function (a, b) {
//       var compA = $(a).text().toUpperCase();
//       var compB = $(b).text().toUpperCase();
//       return (compA < compB) ? -1 : 1;
//     });
//     $.each(listitems, function (i, itm) {
//       mylist.append(itm);
//     });
//   }

//   $("ul#artists").sortList();

// });
