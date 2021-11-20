
// variables
const main = document.querySelector('.main');
const btn = document.querySelector('.btn');
let noOfCubes = 16;
let roomWidth = main.offsetWidth / noOfCubes ;

// Functions
const gridMaker = (numb) => {
    for (let i = 0; i < numb*numb; i++) {
        const items = document.createElement('div');
        items.classList.add('cube');
        main.appendChild(items);
    };
    const box = document.querySelectorAll('.cube');
    box.forEach((room) => {
        room.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    })
    main.style.gridTemplateColumns = `repeat(${numb}, 1fr)`
}

gridMaker(noOfCubes);

btn.addEventListener('click', () => {
    let newValue = prompt('Enter the new size');
    const box = document.querySelectorAll('.cube');
    box.forEach((room) => {
        main.removeChild(room);
    })
    gridMaker(newValue);
});

