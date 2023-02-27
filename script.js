let colorMode = 0;

const container = document.querySelector('#container');
container.style.height = '640px';
container.style.width = '640px';
container.style.border = '4px solid black';

const userInput = document.querySelector('#userInput');

const buttonOne = document.querySelector('#b1');
buttonOne.addEventListener("click", () => {
    createGrid(userInput.value);
});

const blackWhiteButton = document.querySelector('#b2');
blackWhiteButton.addEventListener("click", () => {
    colorMode = 1;
    console.log(colorMode);
});

const randomColorButton = document.querySelector('#b3');
randomColorButton.addEventListener("click", () => {
    colorMode = 2;
    console.log(colorMode);
});

const darkerButton = document.querySelector('#b4');
darkerButton.addEventListener("click", () => {
    colorMode = 3;
    console.log(colorMode);
});

function createGrid(number) {
    const elements = document.getElementsByClassName('pixel');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    for(let i = 0; i < number * number; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.setAttribute('id', [i+1])
        pixel.style.width = (container.clientWidth / number) - 2 + 'px';
        pixel.style.height = (container.clientHeight / number) - 2 + 'px';
        pixel.style.border = '1px solid black';
        pixel.style.backgroundColor = "white";
        pixel.addEventListener("click", () => {
            if (colorMode === 1) {
                if (pixel.style.backgroundColor === 'white') {
                    pixel.style.backgroundColor = 'black';
                    pixel.style.borderColor = 'white'; 
                } else if (pixel.style.backgroundColor === 'black') {
                    pixel.style.backgroundColor = 'white';
                    pixel.style.borderColor = 'black'; 
                }
            } else if (colorMode === 2) {
            const setColor = () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                pixel.style.backgroundColor = `#${randomColor}`;
                console.log(randomColor);
                console.log(pixel.style.backgroundColor);
            }
            setColor();
            } else if (colorMode === 3) {
                if (pixel.style.backgroundColor === 'white') {
                    colorDarker("rgb(255, 255, 255)");
                    pixel.style.backgroundColor = newColor;
                }
                else {
                    colorDarker(`${pixel.style.backgroundColor}`);
                    pixel.style.backgroundColor = newColor;
                }
            }
        });
        container.append(pixel);
    }
}


let rgb = [];

const colorDarker = (rgbInput) => {
    rgb = rgbInput.match(/\d+/g);
    console.log(rgb);
    r = rgb[0];
    g = rgb[1];
    b = rgb[2];
    console.log(g);
    rNew = r - 25.5;
    gNew = g - 25.5;
    bNew = b - 25.5;
    newColor = `rgb(${rNew},${gNew},${bNew})`;
    console.log(newColor);
}

