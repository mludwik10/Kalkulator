//rozpoczecie strony
const screen = document.getElementById('screen');
const mathFunctionScreen = document.getElementById('mathFunctionScreen');
const firstNumberScreen = document.getElementById('firstNumberScreen')
let screenNumber = 0;
let firstNumber;
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
document.getElementById('equalsButton').addEventListener('click', function() {
    obliczanie(screenNumber);  
});


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
    createFirstNumber(screenNumber);
    let mathFunction = this.id;
    resetScreenNumber();
    mathFunctionScreen.textContent = mathFunction;
    return mathFunction;
}

function obliczanie(screenNumber) {
    let mathFunctionFromScreen = document.getElementById('mathFunctionScreen').textContent;
    firstNumber = Number(firstNumberScreen.textContent);
    secondNumber = Number(screen.textContent);
    let result;
    switch (mathFunctionFromScreen) {
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

    screenNumber = result;
    refreshScreenNumber(screenNumber);
} 


// GŁĘBSZE FUNKCJE

//funkcja ktora resetuje numer ekranowy i przypisuje wartosc do nowej zmiennej
function createFirstNumber(screenNumber) {
    firstNumber = screenNumber;
    firstNumberScreen.textContent = screenNumber;

}

function resetScreenNumber () {
    return screenNumber = 0;
}

// odswieza numer na ekranie
function refreshScreenNumber (screenNumber) {
    screen.textContent = screenNumber;
}