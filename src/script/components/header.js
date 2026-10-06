const navToggle = document.querySelector('[data-js="nav-toggle"]');
const mainNavigation = document.querySelector('[data-js="main-navigation"]');

const closeNavigation = () => {
    navToggle.classList.remove('is-open');
    mainNavigation.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    navToggle.setAttribute('aria-expanded', 'false');
};

navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('is-open');

    mainNavigation.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-js="header"]')) {
        closeNavigation();
    }
});
