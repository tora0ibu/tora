var mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
	slidesPerView: 1.2,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});