// 1. klikam liczby
// 2. wybieram dzialanie jakie chce wykonac
// 3. znowu klikam liczby - na ekranie resetuja sie stare, a pojawiaja sie na nowo wpisywane
// 4. klikam rowna sie - pojawia sie wynik



//1. i 3. dzialanie przyciskow klawiszy
let firstNumber = 0;
let secondNumber = 0;
let mathFunction;
let result;
let equalsSecondClick;

const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', actualizeNumber);
}

// dodaje warosc
function actualizeNumber (event) {
    let clickedDigit = event.target.textContent;
    console.log(`result is ${result}`);
    

    //dopisac ze jezeli kontynuuje liczenie (czyli najpierw znak a potem liczba) to normalnei sie liczy, ale jezeli jest wynik a a ja zaczynam wpisaywac nowe liczby, to resetuje wynik, piewrsza liczbe i druga liczbe, wiec wpisuje od nowa

    //prawdopodobnie przypisanie wartosci po kliknieciu znaku dzialania lub na odwrot


    if (!result) {
        if (!mathFunction) {
            if (firstNumber == 0) {
                firstNumber = clickedDigit;
            } else {
                firstNumber += clickedDigit;
            }
        } else {
            if (secondNumber == 0) {
                secondNumber = clickedDigit;
            } else {
                secondNumber += clickedDigit;
            }
        }
    } else {
        firstNumber = result;
        secondNumber = 0;
        if (secondNumber == 0) {
            secondNumber = clickedDigit;
        } else {
            secondNumber += clickedDigit;
        }
    }
    equalsSecondClick = 0;
    console.log(`firstNumber = ${firstNumber} and second number = ${secondNumber}`);
}

// 2. Wybieram jakie dzialanie chce wykonac
const mathFunctionButton = document.getElementsByClassName('mathFunctionButton');
for (let i = 0; i < mathFunctionButton.length; i++) {
    mathFunctionButton[i].addEventListener('click', actualizeMathFunction);
}

function actualizeMathFunction () {
    mathFunction = this.id;
    console.log(`math function is ${mathFunction}`);
}

// 4. pojawia sie wynik

document.getElementById('equalsButton').addEventListener('click', equals);

function equals (){
    a = Number(firstNumber);
    b = Number(secondNumber);
    if (!equalsSecondClick) {
        switch (mathFunction) {
            case '+':
                result = a + b;
    
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
    }
    if (equalsSecondClick)
    a = result;
    switch (mathFunction) {
        case '+':
            result = a + b;

            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    equalsSecondClick = 1;
    console.log(`the result is ${result}`);
}

