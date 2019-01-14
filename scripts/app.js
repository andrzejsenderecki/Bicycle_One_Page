require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_aboutUsSection.scss');
require('../scss/partials/_workSection.scss');
require('../scss/partials/_sliderSection.scss');
require('../scss/partials/_shopSection.scss');

document.addEventListener('DOMContentLoaded', () => {

    // Slider

    const sliderSectionBtn = document.querySelectorAll('.slider-section-nav div');
    const sliderSectionSlide = document.querySelectorAll('.slider-section div');

    for(let i=0; i<sliderSectionBtn.length; i++) {
        sliderSectionBtn[i].addEventListener('click', () => {
            for(let j=0; j<sliderSectionBtn.length; j++) {
                if(i===j) {
                    sliderSectionSlide[j].classList.add('slide-visible');
                    sliderSectionSlide[j].classList.remove('slide-invisible');
                } else {
                    sliderSectionSlide[j].classList.remove('slide-visible');
                    sliderSectionSlide[j].classList.add('slide-invisible');
                }
            }
        });
    }

    // jQuery

    const $aboutLink = $('#about');
    const $workLink = $('#work');
    const $shopLink = $('#shop');
    const $contactLink = $('#contact');

    const $headerSection = $('.header-contaner');
    const $aboutSection = $('.about-section-container');
    const $workSection = $('.work-section-container');
    const $shopSection = $('.shop-section-container');

    $aboutLink.on('click', (event) => {
        event.preventDefault();
        $('html').animate({
            scrollTop: $aboutSection.offset().top
        }, 1000);
    });

    $workLink.on('click', (event) => {
        event.preventDefault();
        $('html').animate({
            scrollTop: $workSection.offset().top
        }, 1000);
    });

    $shopLink.on('click', (event) => {
        event.preventDefault();
        $('html').animate({
            scrollTop: $shopSection.offset().top
        }, 1500);
    });

});
