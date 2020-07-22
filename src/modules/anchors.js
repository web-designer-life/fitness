const anchorsBody = () => {
    const anchors = document.querySelectorAll('ul>li>a[href*="#"]'),
        arrowTop = document.getElementById('totop');

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

