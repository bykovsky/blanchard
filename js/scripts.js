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
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
});

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  placeholder: false,
  //placeholderValue: 'Материал',
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
});

window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.scroll__link').forEach(link => {

    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      //const topOffset = document.querySelector('.header').offsetHeight;
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

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

  document.querySelectorAll('.steps-tab__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.step-slider__item').forEach(function (tabContent) {
        tabContent.classList.remove('step-slider__item--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('step-slider__item--active')
    })
  })

  //Tabs v 2.0
  var tabNavs = document.querySelectorAll(".steps-tab__link");
  var tabPanes = document.querySelectorAll(".step-slider__item");

  for (var i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-path");

      for (var j = 0; j < tabNavs.length; j++) {
        var contentAttr = tabPanes[j].getAttribute("data-target");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("steps-tab__link--active");
          tabPanes[j].classList.add("step-slider__item--active");
        } else {
          tabNavs[j].classList.remove("steps-tab__link--active");
          tabPanes[j].classList.remove("step-slider__item--active");
        }
      };
    });
  }

})

/*Accordion*/
$(function () {
  $("#accordion")
    .accordion({
      header: "> li > .accordion__title",
      collapsible: true,
      heightStyle: "content",
      active: -100,
      animate: 200
    })
});
