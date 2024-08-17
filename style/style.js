// Función para calcular la suma
function suma(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function resta(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 - num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function mult(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function div() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (num2 === 0) {
        document.getElementById('resultado').textContent = 'Error: No se puede dividir entre 0';
    } else {
        var resultado = num1 / num2;
        document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }
}


function pot(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = Math.pow(num1, num2);
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function raiz(num1) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var resultado = Math.sqrt(num1);
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function formulageneral(a, b, c) {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var resultado = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var resultado2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado + ' y ' + resultado2;
}