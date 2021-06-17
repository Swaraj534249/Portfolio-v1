console.log('Portfolio');
const firstName = 'Swaraj';
console.log(firstName);

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });

  //toggle menu/navbar script

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  //typing animation script

  var typed = new Typed('.typing', {
    strings: ['Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  //scroll reveal
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: false,
  });

  sr.reveal('.home-content', { delay: 200 });

  sr.reveal('.title', {});
  sr.reveal('.title::after', { delay: 200 });

  sr.reveal('.about-content', { delay: 200 });

  sr.reveal('.button', { delay: 400 });

  sr.reveal('.skills-content', { delay: 200 });
  sr.reveal('.bars', { interval: 150 });

  sr.reveal('.carousel', { delay: 400 });

  sr.reveal('.contact-content', { delay: 200 });

  VanillaTilt.init(document.querySelector('.glass-card'), {
    max: 25,
    speed: 400,
  });
});
