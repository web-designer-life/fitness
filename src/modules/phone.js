const phone = () => {
    const setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            const range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function mask(event) {
        const matrix = '+7 (___) ___-__-__',
            def = matrix.replace(/\D/g, '');
        let i = 0,
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }
        this.value = matrix.replace(/./g, a => (/[_\d]/.test(a) &&
         i < val.length ? val.charAt(i++) : i >= val.length ? '' : a));
        if (event.type === 'blur') {
            if (this.value.length === 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    const input = document.querySelectorAll('input[type="tel"]');
    input.forEach(elem => {
        elem.addEventListener('input', mask, false);
        elem.addEventListener('focus', mask, false);
        elem.addEventListener('blur', mask, false);
    });
};

export default phone;
