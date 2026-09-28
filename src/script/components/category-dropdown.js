const categoryDropdown = document.querySelector(
    '[data-js="category-dropdown"]',
);
const categoryTrigger = document.querySelector('[data-js="category-trigger"]');

const closeCategoryDropdown = () => {
    categoryDropdown.classList.remove('is-open');
    categoryTrigger.setAttribute('aria-expanded', 'false');
};

categoryTrigger.addEventListener('click', () => {
    const isOpen = categoryDropdown.classList.toggle('is-open');

    categoryTrigger.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-js="category-dropdown"]')) {
        closeCategoryDropdown();
    }
});
