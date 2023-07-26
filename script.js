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
const mathFunctionButton= document.getElementsByClassName('mathFunctionButton');
for (let i = 0; i < mathFunctionButton.length; i++) {
    mathFunctionButton[i].addEventListener('click', addMathFunction);
}

// funkcja ktora sprawdza jakie dzialanie chcesz wykonac
function addMathFunction(event) {
    let mathFunction = this.id;
}