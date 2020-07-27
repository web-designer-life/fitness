const calc = () => {
    const calcForm = document.getElementById('card_order'),
        cardType = document.querySelectorAll('div[class="time"]>input[name="card-type"]'),
        inputClubName = document.getElementById('card_leto_mozaika'),
        priceTotal = document.getElementById('price-total'),
        inputPromo = document.querySelector('input[placeholder="Промокод"]'),
        shelkovoPrice = {
            "1": 2999,
            "6": 14990,
            "9": 21990,
            "12": 24990
        },
        mozaikaPrice = {
            "1": 1999,
            "6": 9990,
            "9": 13990,
            "12": 19990
        };

    calcForm.addEventListener('input', () => {
        cardType.forEach(elem => {
            if (elem.checked) {
                if (inputClubName.checked) {
                    priceTotal.textContent = mozaikaPrice[elem.value];
                } else {
                    priceTotal.textContent = shelkovoPrice[elem.value];
                }
            }
        });
    });

    if (inputPromo) {
        inputPromo.addEventListener('input', () => {
            if (inputPromo.value === "ТЕЛО2019") {
                priceTotal.textContent = Math.floor(priceTotal.textContent * 0.7);
            }
        });
    }
};

export default calc;
