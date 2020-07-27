const forms = () => {
    const inputMessage = 'Вы ввели не все данные!',
        dataMessange = 'Необходимо ваше согласие!',
        loadMessange = 'Загрузка...',
        errorMessage = 'Что-то пошло не так...',
        successMesage = 'Ваша заявка отправлена! Мы скоро с вами свяжемся!',
        formPage = document.querySelectorAll('form'),
        thanks = document.getElementById('thanks'),
        thanksText = thanks.querySelector('p'),
        thanksTitle = thanks.querySelector('h4'),
        name = document.querySelectorAll('input[name="name"]'),
        statusMessange = document.createElement('div');

    name.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яА-ЯёЁ]/ig, '');
        });
    });

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

    const formListener = form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form),
                body = {},
                checkbox = form.querySelector('input[type="checkbox"]'),
                tel = form.querySelector('input[type="tel"]');
            formData.forEach((val, key) => {
                val = val.replace(/^\s*/, '').replace(/\s*$/, '');
                body[key] = val;
            });
            if (form.id !== 'card_order') {
                statusMessange.style.cssText = 'font-size: 1.5rem; color: white; margin-top: 10px; text-align: center;';
            } else {
                statusMessange.style.cssText = 'font-size: 1.5rem; color: black; margin-top: 10px; text-align: center;';
            }
            if (checkArray(body) && tel.value.length === 18) {
                if (checkbox === null || checkbox.checked) {
                    statusMessange.textContent = loadMessange;
                    form.append(statusMessange);
                    postData(body)
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error('status network not 200');
                            }
                            form.reset();
                            if (form.id === 'form1' || form.id === 'form2') {
                                statusMessange.textContent = 'Заявка успешно отправлена.';
                            } else {
                                statusMessange.textContent = '';
                                thanksTitle.textContent = 'Спасибо';
                                thanksText.textContent = successMesage;
                                thanks.style.display = 'block';
                            }
                        })
                        .catch(error => {
                            form.reset();
                            console.log(error);
                            if (form.id === 'form1' || form.id === 'form2') {
                                statusMessange.textContent = errorMessage;
                            } else {
                                statusMessange.textContent = '';
                                thanksTitle.textContent = 'Ошибка';
                                thanksText.textContent = errorMessage;
                                thanks.style.display = 'block';
                            }
                        });
                } else {
                    statusMessange.textContent = dataMessange;
                    form.appendChild(statusMessange);
                }
            } else {
                statusMessange.textContent = inputMessage;
                form.appendChild(statusMessange);
            }
        });
    };

    formPage.forEach(elem => {
        formListener(elem);
    });
};

export default forms;
