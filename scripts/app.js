require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_aboutUsSection.scss');
require('../scss/partials/_workSection.scss');

document.addEventListener('DOMContentLoaded', () => {

    let $aboutLink = $('#about');
    let $workLink = $('#work');
    let $shop = $('#shop');
    let $contact = $('#contact');

    let $headerSection = $('.header-contaner');
    let $aboutSection = $('.about-section-container');
    let $workSection = $('.work-section-container');

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

});
