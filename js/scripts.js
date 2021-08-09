window.addEventListener('DOMContentLoaded', function () {
  /*SLIDERS*/
  var swiper = new Swiper(".site-slider", {
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

  var swiper = new Swiper(".gallery-slider", {
    slidesPerView: 3,
    slidesPerColumn: 2,
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
      520: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },
      1280: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".editions-slider", {
    //slidesPerView: 3,
    //slidesPerColumn: 1,
    //spaceBetween: 50,
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
      520: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
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

  var swiper = new Swiper(".partners-slider", {
    //slidesPerView: 3,
    //slidesPerColumn: 1,
    //spaceBetween: 50,
    navigation: {
      nextEl: ".control-button-next-light",
      prevEl: ".control-button-prev-light",
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
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

  /*var swiper = new Swiper(".partners-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
  });*/

  /*CUSTOM SELECT*/
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    placeholder: false,
    //placeholderValue: 'Материал',
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
  });

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


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

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
      const topOffset = document.querySelector('.main-nav').offsetHeight;
      //const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  /*MORE EVENTS
  var allevents = document.querySelector('.allevents')
  var eventsrow = document.querySelector('.events-row')

  allevents.addEventListener('click', (e) => {
    e.preventDefault();
    eventsrow.classList.toggle('fullrow');
    if (eventsrow.classList.contains('fullrow')) {
      allevents.innerHTML = 'Скрыть события';
    } else {
      allevents.innerHTML = 'Все события';
    }
  });*/

  var allevents = document.querySelector('.allevents')
  var eventsrow = document.querySelector('.events-row')
  var eventblock = document.querySelectorAll(".event-block");

  for (var i = 3; i < eventblock.length; i++) {
    eventblock[i].classList.add('event-block--hidden');
  }

  allevents.addEventListener('click', (e) => {
    e.preventDefault();
    eventsrow.classList.toggle('fullrow');
    allevents.closest("section").scrollIntoView({ block: "start", behavior: "smooth" });

    if (eventsrow.classList.contains('fullrow')) {
      allevents.innerHTML = 'Скрыть события';
      for (var i = 0; i < eventblock.length; i++) {
        eventblock[i].classList.remove('event-block--hidden');
      }
    } else {
      allevents.innerHTML = 'Все события';
      for (var i = 3; i < eventblock.length; i++) {
        eventblock[i].classList.add('event-block--hidden');
      }
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


  //Toggle offcanvas menu
  /*document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#offcanvas-menu').classList.toggle('is-active')
    document.querySelector('.body').classList.toggle('body-hidden')
  });*/

  //close button
  /*document.querySelector('.menu-close-btn').addEventListener('click', function () {
    document.querySelector('#offcanvas-menu').classList.toggle('is-active')
    document.querySelector('.body').classList.toggle('body-hidden')
  });*/

  //Tabs v 1.0

  /*document.querySelectorAll('.catalog-tabs__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.catalog-tab__item').forEach(function (tabContent) {
        tabContent.classList.remove('catalog-tab__item--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-tab__item--active')
    })
  })*/

  //Tabs for gellery
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
  var artistTabPanes = document.querySelectorAll(".artist-block");

  for (var i = 0; i < artistTabNavs.length; i++) {
    artistTabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeArtistTabAttr = e.target.getAttribute("data-artist-path");
      for (var k = 0; k < artistTabNavs.length; k++) {
        var contentArtistAttr = artistTabPanes[k].getAttribute("data-artist-target");
        console.log(contentArtistAttr);

        if (activeArtistTabAttr === contentArtistAttr) {
          artistTabNavs[k].classList.add("artists-list__link--active");
          artistTabPanes[k].classList.add("artist-block--active");
        } else {
          artistTabNavs[k].classList.remove("artists-list__link--active");
          artistTabPanes[k].classList.remove("artist-block--active");
        }
      };
    });
  }

})

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

/*CUSTOM SELECT*/


/*new SimpleBar(document.querySelectorAll('.custom-bar'), {
  autoHide: false,
  scrollbarMaxSize: 28,
});

$('.custom-bar').each(element, new SimpleBar());*/
