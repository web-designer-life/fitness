const burgerMenu = () => {

    const menuBtn = document.querySelector('.menu-button img'),
        menu = document.querySelector('.popup-menu');

    menuBtn.addEventListener('click', () => {
        menu.style.display = 'flex';
    });

    menu.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.scroll a') || target.matches('.close-menu-btn img')) {
            menu.style.display = 'none';
        }
    });
};

export default burgerMenu;
