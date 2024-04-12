 const mobileNav = document.querySelector('.mnav');
 const closeBtn = document.querySelector('.mnav__close-btn');
 const  closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () =>{
    console.log('btn is clicked');
    if(mobileNav.classList.contains(navClosedClass)){
        mobileNav.classList.toggle(navOpenedClass);

        closeBtnIcon.classList.toggle(arrowLeftClass);
        closeBtnIcon.classList.toggle(arrowRightClass);
    }
});

//Swiper
const swiper = new Swiper('.swiper', {

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });

  //faq
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item) => {
    const faqBtn = document.querySelector('.faq__btn');

    item.addEventListener('click', () =>{
        const isOpen = item.classList.toggle('open'); 
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.classList = '${iconClass} text-2xl';
    });
  });
  

  //scroll reveal animations
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 600,

    //reset: true, // reset animation
  });

  //hero
  sr.reveal('.hero__text', {origin: 'top'});
  sr.reveal('.hero__img');

  //stats
  sr.reveal('.stats__item',{
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'top',
  });

  //Services
  sr.reveal('.services');
  sr.reveal('.services__top');
  sr.reveal('.services__item', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom',
  });

  //appointments
  sr.reveal('.appointment__title');
  sr.reveal('.appointment__form');

  //testimonials
  sr.reveal('.testimonial');
  sr.reveal('.testimonial__container');

  //team
  sr.reveal('.team__title');
  sr.reveal('.team__slider');

  //faq
  sr.reveal('.faq__title');
  sr.reveal('.faq__item',{
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom',
  });

  //departments
  sr.reveal('.department__bg');
  sr.reveal('.department__container');

  //blog
  sr.reveal('.blog__title');
  sr.reveal('.blog__post', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom',
  });

  //brands
  sr.reveal('.brands__logo',{
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom',
  });

  //newsletters
  sr.reveal('.newsletter');
  sr.reveal('.newsletter__container');

  //footer
  sr.reveal('.footer__item',{
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom',
  });