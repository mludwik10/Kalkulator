//rozpoczecie strony
const screen = document.getElementById('screen');
const mathFunctionScreen = document.getElementById('mathFunctionScreen');
let screenNumber = 0;
let mathFunction = 0;
refreshScreenNumber (screenNumber);


// ŚLEDZENIE KLIKNIĘĆ PRZYCISKOW

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
document.getElementById('equalsButton').addEventListener('click', obliczanie(mathFunction, screenNumber));


//dzialanie przycisku clear 'C'
document.getElementById('clear').addEventListener('click', clearScreen);


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

function clearScreen () {
    screenNumber = 0;
    alert('halo');
    refreshScreenNumber(screenNumber);
}


// funkcja ktora sprawdza jakie dzialanie chcesz wykonac i zwraca taka wartosc
function addMathFunction(event) {
    let mathFunction = this.id;
    resetScreenNumber();
    createFirstNumber(screenNumber)
    mathFunctionScreen.textContent = mathFunction;
    return mathFunction;
}

function obliczanie(mathFunction, screenNumber) {
    createSecondNumber(screenNumber);
    let result;
    switch (mathFunction) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
    }
    alert(result)
    return result;

} 


// GŁĘBSZE FUNKCJE

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

// odswieza numer na ekranie
function refreshScreenNumber (screenNumber) {
    screen.textContent = screenNumber;
}