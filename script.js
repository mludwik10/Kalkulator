//rozpoczecie strony
const screen = document.getElementById('screen');
let screenNumber = 0;
refreshScreenNumber (screenNumber);

// funkcja zbiera klik z ekranu. Jezeloi na ekranie jest 0 to je zastepuje, a jezeli
// inna liczba to dodaje zebrana cyfre na koniec
function addNewDigit (event) {
    let newDigit = event.target.textContent;
    if (screenNumber == 0) {
        screenNumber = newDigit;
    } else {
        screenNumber += newDigit;
    }
    refreshScreenNumber (screenNumber);   
}

// odswieza numer na ekranie
function refreshScreenNumber (screenNumber) {
    screen.textContent = screenNumber;
}

//dzialanie przycisku clear 'C'
document.getElementById('clear').addEventListener('click', clearScreen);
function clearScreen () {
    screenNumber = 0;
    refreshScreenNumber(screenNumber);
}

//dzialanie przyciskow klawiszy
const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', addNewDigit);
}

//funkcja ktora sprawdza klikniecia w dzialania matematyczne
const mathFunctionButton = document.getElementsByClassName('mathFunctionButton');
for (let i = 0; i < mathFunctionButton.length; i++) {
    mathFunctionButton[i].addEventListener('click', addMathFunction);
}

//funkcja uruchamiajaca dzialanie po nacisnieciu "="
const equalsButton = document.getElementsByClassName('equalsButton');
for (let i = 0; i < equalsButton.length; i++) {
    equalsButton[i].addEventListener('click', equalsFunction(mathFunction, screenNumber));
}


// funkcja ktora sprawdza jakie dzialanie chcesz wykonac i zwraca taka wartosc
function addMathFunction(event) {
    let mathFunction = this.id;
    alert(mathFunction);
    resetScreenNumber();
    createFirstNumber(screenNumber)
    screen.textContent = mathFunction;
    return mathFunction;
}

//funkcja ktora resetuje numer ekranowy i przypisuje wartosc do nowej zmiennej
function createFirstNumber(screenNumber) {
    let firstNumber = screenNumber;
    return firstNumber;
}

function resetScreenNumber () {
    return screenNumber = 0;
}

function createSecondNumber(screenNumber) {
    return secondNumber = screenNumber;
}

function equalsFunction(mathFunction, screenNumber) {
    createSecondNumber(screenNumber);
    alert(mathFunction);
    let result;
    switch (mathFunction) {
        case '+':
            return result = firstNumber + secondNumber;
        case '-':
            return result = firstNumber - secondNumber;
        case '*':
            return result = firstNumber * secondNumber;
    }
    alert(result);
}
