const carouselSlider = () => {
    const servicesSlider = document.querySelector('.services-slider-wrapper'),
        slides = servicesSlider.querySelectorAll('.slide'),
        servicesSliderBlock = document.querySelector('.services-slider-block'),
        next = servicesSliderBlock.querySelector('.next'),
        prev = servicesSliderBlock.querySelector('.prev'),
        sliderWidth = parseFloat(getComputedStyle(servicesSlider).width),
        slideWidth = parseFloat(getComputedStyle(slides[0]).width),
        step = slideWidth / sliderWidth * 100,
        items = [];

    let positionLeftItem = 0,
        transform = 0;

    slides.forEach((item, index) => {
        items.push({
            item,
            position: index,
            transform: 0
        });
    });

    const position = {
        getItemMin() {
            let indexItem = 0;
            items.forEach((item, index) => {
                if (item.position < items[indexItem].position) {
                    indexItem = index;
                }
            });
            return indexItem;
        },
        getItemMax() {
            let indexItem = 0;
            items.forEach((item, index) => {
                if (item.position > items[indexItem].position) {
                    indexItem = index;
                }
            });
            return indexItem;
        },
        getMin() {
            return items[position.getItemMin()].position;
        },
        getMax() {
            return items[position.getItemMax()].position;
        }
    };

    const transformItem = direction => {
        let nextItem;
        if (direction === 'rigth') {
            positionLeftItem++;
            if ((positionLeftItem + sliderWidth / slideWidth - 1) > position.getMax()) {
                nextItem = position.getItemMin();
                items[nextItem].position = position.getMax() + 1;
                items[nextItem].transform += items.length * 100;
                items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
            }
            transform -= step;
        } else if (direction === 'left') {
            positionLeftItem--;
            if (positionLeftItem < position.getMin()) {
                nextItem = position.getItemMax();
                items[nextItem].position = position.getMin() - 1;
                items[nextItem].transform -= items.length * 100;
                items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
            }
            transform += step;
        }
        servicesSlider.style.transform = `translateX( ${transform}%`;
    };

    next.addEventListener('click', () => {
        transformItem('rigth');
    });

    prev.addEventListener('click', () => {
        transformItem('left');
    });
};

export default carouselSlider;
