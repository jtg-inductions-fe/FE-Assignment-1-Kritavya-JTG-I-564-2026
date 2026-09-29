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
                    `<button class="latest-releases__dot" type="button" aria-label="Go to slide ${index + 1}" aria-selected="false"></button>`,
            )
            .join('');

        const scrollTo = (index) => {
            emblaApi.scrollTo(index);
        };

        dotNodes = Array.from(
            dotsNode.querySelectorAll('.latest-releases__dot'),
        );

        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener('click', () => scrollTo(index));
        });
    };

    const toggleDotButtonsActive = () => {
        const previous = emblaApi.previousScrollSnap();
        const selected = emblaApi.selectedScrollSnap();

        dotNodes[previous].classList.remove('latest-releases__dot--selected');
        dotNodes[previous].setAttribute('aria-selected', 'false');

        dotNodes[selected].classList.add('latest-releases__dot--selected');
        dotNodes[selected].setAttribute('aria-selected', 'true');
    };

    addDotBtnsWithClickHandlers();
    toggleDotButtonsActive();

    emblaApi
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('reInit', toggleDotButtonsActive)
        .on('select', toggleDotButtonsActive);
};
