
const name = 'world';
console.log(`Hello ${name}`);

const changeButton = document.getElementById('changeButton');

function changeTitle() {
    const elem = document.querySelector('h1');
    elem.textContent = '¡Boo!';
    elem.style.color = '#4c0d06';
}

changeButton.addEventListener('click', changeTitle);
