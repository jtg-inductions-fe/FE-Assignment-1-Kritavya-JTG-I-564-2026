document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.recently-visited__topics');
    if (!container) return;

    const mobileHTML = container.innerHTML;

    const tabletHTML = `
        <a href="#" class="button">Android</a>
        <a href="#" class="button">OO</a>
        <a href="#" class="button">Marketing Digital</a>
        <a href="#" class="button">Agile</a>
        <a href="#" class="button">Startups</a>
        <a href="#" class="button">HTML &amp; CSS</a>
        <a href="#" class="button">Java</a>
        <a href="#" class="button">Python</a>
    `;

    function renderLayout() {
        if (window.innerWidth >= 1024) {
            container.innerHTML = tabletHTML;
        } else {
            container.innerHTML = mobileHTML;
        }
    }

    renderLayout();
    window.addEventListener('resize', renderLayout);
});
