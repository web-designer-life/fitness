const forms = () => {
    const errorMessage = 'Что-то пошло не так...',
        inputMessage = 'Вы ввели не все данные!',
        loadMessange = 'Загрузка...',
        successMesage = 'Спасибо! Мы скоро с вами свяжемся!',
        cardOrderForm = document.getElementById('card_order'),
        bannerForm = document.getElementById('banner-form'),
        footerForm = document.getElementById('footer_form'),
        callbackForm = document.getElementById('form1'),
        freeVisitForm = document.getElementById('form2'),
        statusMessange = document.createElement('div');

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    function checkArray(body) {
        for (const key in body) {
            if (body[key] === '') {
                return false;
            }
        }
        return true;
    }

    statusMessange.style.cssText = 'font-size: 1.5rem; color: white; margin-top: 10px;';

    const formListener = form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const body = {};
            formData.forEach((val, key) => {
                val = val.replace(/^\s*/, '').replace(/\s*$/, '');
                body[key] = val;
            });
            if (checkArray(body)) {
                statusMessange.textContent = loadMessange;
                form.appendChild(statusMessange);
                postData(body)
                    .then(() => {
                        statusMessange.textContent = successMesage;
                        form.reset();
                    })
                    .catch(error => {
                        statusMessange.textContent = errorMessage;
                        form.reset();
                        console.log(error);
                    });
            } else {
                statusMessange.textContent = inputMessage;
                form.appendChild(statusMessange);
            }
        });
    };

    formListener(cardOrderForm);
    formListener(bannerForm);
    formListener(footerForm);
    formListener(callbackForm);
    formListener(freeVisitForm);
};

export default forms;
