const addTogglePrevNextButtonsActive = (emblaApi, prevBtn, nextBtn) => {
    const togglePrevNextButtonsState = () => {
        prevBtn.disabled = !emblaApi.canScrollPrev();
        nextBtn.disabled = !emblaApi.canScrollNext();
    };

    togglePrevNextButtonsState();

    emblaApi
        .on('select', togglePrevNextButtonsState)
        .on('reInit', togglePrevNextButtonsState);
};

/**
 * Add click handlers to the previous and next buttons
 * @param {Object} emblaApi - Embla Carousel API
 * @param {HTMLElement} prevBtn - Previous button
 * @param {HTMLElement} nextBtn - Next button
 */
export const addPrevNextButtonClickHandlers = (emblaApi, prevBtn, nextBtn) => {
    const scrollPrev = () => {
        emblaApi.scrollPrev();
    };

    const scrollNext = () => {
        emblaApi.scrollNext();
    };

    prevBtn.addEventListener('click', scrollPrev);
    nextBtn.addEventListener('click', scrollNext);

    addTogglePrevNextButtonsActive(emblaApi, prevBtn, nextBtn);
};
