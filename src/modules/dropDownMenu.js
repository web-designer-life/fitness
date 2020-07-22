const dropDownMenu = () => {
    const clubSelect = document.querySelector('div[class*="clubs-list"]>p'),
        clubsList = document.querySelector('div[class*="clubs-list"]>ul');

    clubSelect.addEventListener('click', () => {
        const display = window.getComputedStyle(clubsList).display;
        if (display === 'none') {
            clubsList.style.display = 'block';
        } else {
            clubsList.style.display = 'none';
        }
    });

    document.body.addEventListener('click', event => {
        let target = event.target;

        target = target.closest('.club-select');
        if (!target) {
            clubsList.style.display = 'none';
        }
    });
};

export default dropDownMenu;
