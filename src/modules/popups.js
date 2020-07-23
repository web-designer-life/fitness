const popups = () => {

    const popupBtn = document.querySelectorAll('.open-popup'),
        formWrapper = document.querySelectorAll('.popup');

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            const popupForm = document.getElementById((elem.dataset.popup).substr(1));
            if (elem.classList.contains('fixed-gift')) {
                elem.style.display = 'none';
            }
            popupForm.style.display = 'block';
        });
    });

    formWrapper.forEach(elem => {
        elem.addEventListener('click', e => {
            const target = e.target;

            if (target.classList.contains('close_icon') || target.classList.contains('close-btn') ||
            !target.closest('.form-content')) {
                elem.style.display = 'none';
            }
        });
    });
};

export default popups;
