/**
 * Create the carousel dot buttons and click handlers
 * @param {Object} emblaApi - Embla carousel API
 * @param {HTMLElement} dotsNode - Container for the dot buttons
 */
export const addDotButtonAndClickHandlers = (emblaApi, dotsNode) => {
    let dotNodes = [];

    const dotClass = dotsNode
        .closest('[data-js="embla"]')
        .classList.contains('best-sellers')
        ? 'best-sellers__dot'
        : 'latest-releases__dot';

    const addDotBtnsWithClickHandlers = () => {
        dotsNode.innerHTML = emblaApi
            .scrollSnapList()
            .map(
                (_, index) =>
                    `<button class="carousel__dot ${dotClass}" type="button" aria-label="Go to slide ${index + 1}"></button>`,
            )
            .join('');

        const scrollTo = (index) => {
            emblaApi.scrollTo(index);
        };

        dotNodes = Array.from(dotsNode.querySelectorAll('.carousel__dot'));

        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => scrollTo(index));
        });
    };

    const toggleDotButtonsActive = () => {
        const selected = emblaApi.selectedScrollSnap();

        dotNodes.forEach((dotNode, index) => {
            const isSelected = index === selected;

            dotNode.classList.toggle('carousel__dot--selected', isSelected);

            if (isSelected) {
                dotNode.setAttribute('aria-current', 'true');
            } else {
                dotNode.removeAttribute('aria-current');
            }
        });
    };

    addDotBtnsWithClickHandlers();
    toggleDotButtonsActive();

    emblaApi
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('reInit', toggleDotButtonsActive)
        .on('select', toggleDotButtonsActive);
};
