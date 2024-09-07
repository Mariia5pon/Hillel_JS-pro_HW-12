
// TASK 1

const btn = document.querySelector('input[type="button"]');
btn.addEventListener('click', () => {
    const table = document.getElementById('pythagorean');
    table.classList.toggle('hidden');

    if(table.classList.contains('hidden')){
        btn.setAttribute('value', 'Open');
        return;
    }
    btn.setAttribute('value', 'Close');
    table.innerHTML = '';

    for(let i=1; i<=10; i++) {
        const row = document.createElement('tr');
        for(let j=1; j<=10; j++) {
            const cell = document.createElement('td');
            cell.textContent = i*j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
})

// TASK 2

const task2 = document.querySelector('.task2');
const textBlock = document.querySelector('.text-block');
task2.addEventListener('click', () => {
    textBlock.classList.toggle('color-changed');
});

// TASK 3

function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const imagePath = `./img/${randomNumber}.jpg`;
    return imagePath;
}
const imageElement = document.getElementById('random-img');
imageElement.src = getRandomImage();
document.querySelector('.random-img-btn').addEventListener('click', () => {
    imageElement.src = getRandomImage();
});

