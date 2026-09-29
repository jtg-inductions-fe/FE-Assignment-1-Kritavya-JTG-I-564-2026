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
