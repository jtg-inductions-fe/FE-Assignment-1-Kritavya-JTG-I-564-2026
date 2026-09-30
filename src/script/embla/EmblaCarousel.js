import EmblaCarousel from 'embla-carousel';
import { addDotButtonAndClickHandlers } from './EmblaCarouselDotButton';
import { addPrevNextButtonClickHandlers } from './EmblaCarouselArrowButtons';

const OPTIONS = {
    loop: true,
    align: 'center',
};

const emblaNodes = document.querySelectorAll('[data-js="embla"]');

emblaNodes.forEach((emblaNode) => {
    const viewportNode = emblaNode.querySelector('[data-js="embla-viewport"]');
    const prevBtn = emblaNode.querySelector('[data-js="embla-prev"]');
    const nextBtn = emblaNode.querySelector('[data-js="embla-next"]');
    const dotsNode = emblaNode.querySelector('[data-js="embla-dots"]');

    const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

    addPrevNextButtonClickHandlers(emblaApi, prevBtn, nextBtn);
    addDotButtonAndClickHandlers(emblaApi, dotsNode);
});
