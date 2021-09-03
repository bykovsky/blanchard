const editionsSlidersets = {
  cardsContainerName: 'editions-slider',
  cardsWrapName: 'editions-wrapper',
  card: 'edition-slide'
};

function activateEditionsSlider(sets) {
  sets.cardsContainer.classList.add("swiper");
  sets.cardsWrap.classList.add("swiper-wrapper");
  sets.cardsWrap.classList.remove("events-row");


  sets.editionsCardsSlider = new Swiper(`.${sets.cardsContainerName}`, {
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 50,
    pagination: {
      el: ".gallery-swiper-pagination",
      type: "fraction",
      clickable: false,
    },
    navigation: {
      nextEl: ".control-button-next-dark",
      prevEl: ".control-button-prev-dark",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 34,
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
  sets.cardsWrap.classList.add("events-row");
}

function checkWindowWidthEditions(sets) {
  const currentWidth = getWindowWidth();
  sets.cardsContainer = document.querySelector(`.${sets.cardsContainerName}`);
  sets.cardsWrap = document.querySelector(`.${sets.cardsWrapName}`);
  if (currentWidth <= MOBILE_WIDTH && (!sets.editionsCardsSlider || sets.editionsCardsSlider.destroyed)) {
    destroyEditionsSlider(sets);
  } else if (currentWidth >= MOBILE_WIDTH && sets.editionsCardsSlider) {
    activateEditionsSlider(sets);
  }
}

checkWindowWidthEditions(editionsSlidersets);
