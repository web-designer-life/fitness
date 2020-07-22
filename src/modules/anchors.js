const anchorsBody = () => {
    const anchors = document.querySelectorAll('ul>li>a[href*="#"]'),
        arrowTop = document.getElementById('totop');

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

        if (html.scrollTop > 0) {
            fadeIn(arrowTop);
        } else {
            arrowTop.style.display = 'none';
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

