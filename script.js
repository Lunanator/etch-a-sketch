const container = document.querySelector('#container');
container.style.height = '640px';
container.style.width = '640px';
container.style.border = '4px solid black';

function createGrid(number) {
    const elements = document.getElementsByClassName('pixel');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    for(let i = 0; i < number * number; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = (container.clientWidth / number) - 2 + 'px';
        pixel.style.height = (container.clientHeight / number) - 2 + 'px';
        pixel.style.border = '1px solid black';
        container.append(pixel);
    }
}
