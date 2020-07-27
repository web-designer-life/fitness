const mainSlider = () => {
    const slide = document.querySelectorAll('.main-slider .slide');
    let currentSlide = 0;

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'block';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    const startSlide = () => {
        setInterval(autoPlaySlide, 3000);
    };

    startSlide();
};

export default mainSlider;
