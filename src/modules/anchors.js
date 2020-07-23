const anchorsBody = () => {
    const anchors = document.querySelectorAll('ul>li>a[href*="#"]'),
        arrowTop = document.getElementById('totop'),
        topMenu = document.querySelector('.top-menu'),
        headSlider = document.querySelector('.head-slider');

    window.addEventListener('scroll', () => {
        const html = document.documentElement,
            display = window.getComputedStyle(arrowTop).display;

        const fadeIn = el => {
            if (display === 'none') {
                let opacity = 0.05;
                el.style.opacity = opacity;
                el.style.display = 'block';
                const timer = setInterval(() => {
                    if (opacity >= 1) {
                        clearInterval(timer);
                    }
                    el.style.opacity = opacity;
                    opacity += 0.05;
                }, 10);
            }
        };

        if (html.scrollTop > headSlider.offsetTop + headSlider.clientHeight - topMenu.clientHeight) {
            fadeIn(arrowTop);
        } else {
            arrowTop.style.display = 'none';
        }

        if ((topMenu.offsetTop - topMenu.clientHeight) - html.scrollTop < 0) {
            topMenu.style.position = 'fixed';
            headSlider.style.margin = `${topMenu.clientHeight}px 0 0 0`;
        }
        if ((headSlider.offsetTop - topMenu.clientHeight) - html.scrollTop >= 0) {
            headSlider.style.margin = null;
            topMenu.style.position = null;
        }
    });

    arrowTop.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('body').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    for (const anchor of anchors) {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1);
            if (blockID.indexOf('#') === -1) {
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                location.href = anchor.getAttribute('href');
            }
        });
    }
};

export default anchorsBody;

