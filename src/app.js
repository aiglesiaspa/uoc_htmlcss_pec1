
const name = 'world';
console.log(`Hello ${name}`);

const changeButton = document.getElementById('changeButton');

function changeTitle() {
    const elem = document.querySelector('h1');
    elem.textContent = '¡Boo!';
    elem.style.color = '#4c0d06';
    elem.classList.add('animated');

    document.body.style.backgroundColor = '#919191';

    window.scrollTo({ top: 0, behavior: 'smooth' }); //scroll arriba

    const header = document.querySelector('header');
    header.style.clipPath = 'polygon(0% 100%, 10% 70%, 20% 90%, 30% 60%, 40% 85%, 50% 50%, 60% 80%, 70% 50%, 80% 90%, 90% 70%, 100% 100%)';

}

changeButton.addEventListener('click', changeTitle);
