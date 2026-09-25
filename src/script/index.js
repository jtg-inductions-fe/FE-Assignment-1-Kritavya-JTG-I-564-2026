const menuToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.header__nav');
const categoryTrigger = document.querySelector('.category-dropdown__trigger');
const categoryDropdown = document.querySelector('.category-dropdown');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('is-open');
    navigation.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
});

categoryTrigger.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = categoryDropdown.classList.toggle('is-open');
    categoryTrigger.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.header')) {
        menuToggle.classList.remove('is-open');
        navigation.classList.remove('is-open');
        categoryDropdown.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        categoryTrigger.setAttribute('aria-expanded', 'false');
    }
});
