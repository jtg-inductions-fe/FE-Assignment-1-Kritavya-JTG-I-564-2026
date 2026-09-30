/**
 * Create the carousel dot buttons and click handlers
 * @param {Object} emblaApi - Embla carousel API
 * @param {HTMLElement} dotsNode - Container for the dot buttons
 */
export const addDotButtonAndClickHandlers = (emblaApi, dotsNode) => {
    let dotNodes = [];

    const addDotBtnsWithClickHandlers = () => {
        dotsNode.innerHTML = emblaApi
            .scrollSnapList()
            .map(
                (_, index) =>
                    `<button class="carousel__dot" type="button" aria-label="Go to slide ${index + 1}" aria-selected="false"></button>`,
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

            dotNode.setAttribute('aria-selected', String(isSelected));
        });
    };

    addDotBtnsWithClickHandlers();
    toggleDotButtonsActive();

    emblaApi
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('reInit', toggleDotButtonsActive)
        .on('select', toggleDotButtonsActive);
};
