const inputOne = document.querySelector('.input_one');
const inputTwo = document.querySelector('.input_two');
const result = document.querySelector('.result');

function sum() {
    console.log(inputOne.value, inputTwo.value);

const sumNumbers = Number(inputOne.value) + Number(inputTwo.value)

    result.innerHTML = `<span>O RESULTADO É:<span class="number"> ${sumNumbers}<span></span>`

}