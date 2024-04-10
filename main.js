let button = document.querySelector('button');

button.addEventListener('click', () => {
    let box = document.querySelector('.container0');
    const circle = document.createElement('div');
    circle.classList.add('circle'); 
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const circleSize = Math.min(boxWidth, boxHeight) * 0.1;
    const x = Math.floor(Math.random() * (boxWidth - circleSize));
    const y = Math.floor(Math.random() * (boxHeight - circleSize));
    circle.style.position = 'absolute'; 
    circle.style.top = `${y}px`; 
    circle.style.left = `${x}px`; 
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = getRandomColor();
    circle.style.height = `${circleSize}px`;
    circle.style.width = `${circleSize}px`;
    box.appendChild(circle);

    
});

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

