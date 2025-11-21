// import EmblaCarousel from "embla";
import { setupTweenParallax } from "./emblaCarouselTweenParallax.js";
// import Autoplay from 'embla-carousel-autoplay';

const OPTIONS = {  loop: true };

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()]);
const removeTweenParallax = setupTweenParallax(emblaApi);

emblaApi.on("destroy", removeTweenParallax);
