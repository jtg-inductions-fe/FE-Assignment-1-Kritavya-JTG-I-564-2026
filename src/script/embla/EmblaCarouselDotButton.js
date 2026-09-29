export const addDotButtonAndClickHandlers = (emblaApi, dotsNode) => {
    let dotNodes = [];

    const addDotBtnsWithClickHandlers = () => {
        dotsNode.innerHTML = emblaApi
            .scrollSnapList()
            .map(
                () =>
                    '<button class="latest-releases__dot" type="button"></button>',
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

        dotNodes[selected].classList.add('latest-releases__dot--selected');
    };

    addDotBtnsWithClickHandlers();
    toggleDotButtonsActive();

    emblaApi
        .on('reInit', addDotBtnsWithClickHandlers)
        .on('reInit', toggleDotButtonsActive)
        .on('select', toggleDotButtonsActive);
};
