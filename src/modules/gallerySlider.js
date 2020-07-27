const gallerySlider = () => {
    const slide = document.querySelectorAll('.gallery-slider .slide'),
        dotsList = document.createElement('ul'),
        slider = document.querySelector('.gallery-slider');

    let currentSlide = 0,
        interval;

    dotsList.classList.add('slider-dots');
    slider.append(dotsList);

    slider.insertAdjacentHTML('beforeend', `
        <div class="slider-arrow prev"></div>
        <div class="slider-arrow next"></div>
    `);

    const addDots = () => {
        for (let i = 0; i < slide.length; i++) {
            const dot = document.createElement('li');
            if (i === 0) {
                dot.classList.add('slick-active');
            }
            dotsList.append(dot);
        }
    };

    addDots();

    const dot = document.querySelectorAll('.slider-dots li');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'slick-active');
    };

    const startSlide = () => {
        interval = setInterval(autoPlaySlide, 3000);
    };

    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        if (!target.matches('.slider-arrow, .slider-dots, .slider-dots li')) {
            return;
        }
        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'slick-active');
        if (target.matches('.next')) {
            currentSlide++;
        } else if (target.matches('.prev')) {
            currentSlide--;
        } else if (target.matches('.slider-dots li')) {
            dot.forEach((item, index) => {
                if (item === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'slick-active');

    });

    slider.addEventListener('mouseover', event => {
        if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots')) {
            clearInterval(interval);
        }
    });

    slider.addEventListener('mouseout', event => {
        if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots')) {
            startSlide();
        }
    });

    startSlide();
};

export default gallerySlider;
