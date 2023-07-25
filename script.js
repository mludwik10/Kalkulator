
const screen = document.getElementById('screen');
function addNumberToScreen(event) {
    const number = event.target.textContent;
    screen.textContent += number;
}

document.getElementById('clear').addEventListener('click', clearScreen);
function clearScreen () {
    screen.textContent = "";
}

const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', addNumberToScreen);
}

