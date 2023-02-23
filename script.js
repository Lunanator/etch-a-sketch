const container = document.querySelector('#container');
container.style.height = '640px';
container.style.width = '640px';
container.style.border = '4px solid black';

function createGrid(number) {
    for(let i = 0; i < number * number; i++) {
        const pixel = document.createElement('div');
        pixel.style.width = (container.clientWidth / number) - 2 + 'px';
        pixel.style.height = (container.clientHeight / number) - 2 + 'px';
        pixel.style.border = '1px solid black';
        container.append(pixel);
    }
}