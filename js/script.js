window.addEventListener('input', start);

function start() {
    var numberA = parseInt(document.getElementById("numberA").value);
    var numberB = parseInt(document.getElementById("numberB").value);

    var sum = document.getElementById("sum");
    if(numberA >= 0 && numberB >= 0) {
        sum.value = numberA + numberB;
    }

    var subtraction1 = document.getElementById("subtraction1");
    if(numberA >= 0 && numberB >= 0) {
        subtraction1.value = numberA - numberB;
    }

    var subtraction2 = document.getElementById("subtraction2");
    if(numberA >= 0 && numberB >= 0) {
        subtraction2.value = numberB - numberA;
    }

    var multiplication = document.getElementById("multiplication");
    if(numberA >= 0 && numberB >= 0) {
        multiplication.value = numberB * numberA;
    }

    var division1 = document.getElementById("division1");
    if(numberA >= 0 && numberB >= 0) {
        division1.value = numberA / numberB;
    }

    var division2 = document.getElementById("division2");
    if(numberA >= 0 && numberB >= 0) {
        division2.value = numberB / numberA;
    }

    var squareA = document.getElementById("squareA");
    if(numberA >= 0 && numberB >= 0) {
        squareA.value = Math.pow(numberA,2);
    }

    var squareB = document.getElementById("squareB");
    if(numberA >= 0 && numberB >= 0) {
        squareB.value = Math.pow(numberB,2);
    }

    var dividersA = document.getElementById("dividersA");
    if(numberA >= 0) {
        dividersA.value = dividers(numberA);
    }

    var dividersB = document.getElementById("dividersB");
    if(numberB >= 0) {
        dividersB.value = dividers(numberB)
    }

    var factorialA = document.getElementById("factorialA");
    if(numberA >= 0) {
        factorialA.value = factorial(numberA);
    }

    var factorialB = document.getElementById("factorialB");
    if(numberB >= 0) {
        factorialB.value = factorial(numberB);
    }

    function dividers(a) {
        var arr = [];

        for(var i = 1; i <= a; i++) {
            if(a % i === 0) {
                arr.push(i);
            }
        }

        var val = arr.join(', ')
        var qtd = arr.length;
        return val + ` (${qtd})`;
    }

    function factorial(a) {
        var n = 1;

        if(a <= 21) {
            for(var i = a; i > 1; i-- ){
                n *= i;
            }
            return n;
        }else {
            return "Número muito grande";
        }
    }
}








