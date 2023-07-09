const tabsBtn = document.querySelectorAll('.tabs__btn-item')
const tabsContent = document.querySelectorAll('.tabs__content-item')

tabsBtn.forEach(function(element) {
  element.addEventListener('click', open)
})

function open (evt) {
  const tabCurrent = evt.currentTarget;

  tabsBtn.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active')
  })

  tabCurrent.classList.add('tabs__btn-item--active')
}

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.header-top__list')

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('header-top__list--active');
})

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});