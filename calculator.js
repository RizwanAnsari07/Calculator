document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('input[type=button]');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;
            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                // Prevent multiple operators
                const operators = ['+', '-', '*', '/', '%', '.'];
                const lastChar = display.value[display.value.length - 1];
                if (operators.includes(value) && operators.includes(lastChar)) {
                    return;
                }
                display.value += value;
            }
        });
    });
});
