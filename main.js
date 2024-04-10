let button = document.querySelector('button');
let counter = 0;

button.addEventListener('click', () => {
    let box = document.querySelector('.container0');
    const circle = document.createElement('div');
    circle.classList.add('circle'); 
    const boxWidth = box.offsetWidth ;
    const boxHeight = box.offsetHeight ;
    const x = Math.floor(Math.random() * boxWidth);
    const y = Math.floor(Math.random() * boxHeight);
    circle.style.position = 'absolute'; 
    circle.style.top = `${y}px`; 
    circle.style.left = `${x}px`; 
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = getRandomColor();
    circle.style.height = '10%';
    circle.style.width = '10%';
    box.appendChild(circle);

    console.log(box.offsetHeight, box.offsetWidth)
});




function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

