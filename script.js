function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Деление на ноль невозможно!');
                return;
            }
            break;
        case '*':
            result = num1 * num2;
            break;
    }

    document.querySelector('#result span').textContent = result;
}
