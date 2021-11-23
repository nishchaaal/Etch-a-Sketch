
// variables
const main = document.querySelector('.main');
const btn = document.querySelector('.btn');
let noOfCubes = 16;
let roomWidth = main.offsetWidth / noOfCubes ;

// Functions

const randomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const gridMaker = (numb) => {
    for (let i = 0; i < numb*numb; i++) {
        const items = document.createElement('div');
        items.classList.add('cube');
        main.appendChild(items);
    };
    const box = document.querySelectorAll('.cube');
    box.forEach((room) => {
        room.style.backgroundColor = 'rgb(255, 255, 255)';

        room.addEventListener('mouseover', (e) => {
                let generatedColor = randomColor();
                e.target.style.backgroundColor = generatedColor;
        })
    })
    main.style.gridTemplateColumns = `repeat(${numb}, 1fr)`
}

const enterNewSize = () => {
    let newValue = prompt('Enter the new size(1-99)');
    if(0 < newValue && newValue < 100) {
        main.innerHTML = '';
        gridMaker(newValue);
    } else {
        alert('Numbers only from 1 to 99');
        return enterNewSize();
    }
}

btn.addEventListener('click', enterNewSize);

gridMaker(noOfCubes);