
// TASK 1

const btn1 = document.querySelector('#btn1');
let userLink;
btn1.addEventListener('click', () => {
    userLink=prompt('Enter your link, please.');
    if(userLink && (userLink.startsWith('http://') || userLink.startsWith('https://'))) {
        console.log(userLink);
    } else {
        alert('Please enter a link!');
        userLink = undefined;
    }
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Please enter a link!');
    }
});

// TASK 2

const btns = document.querySelector('#btns');
btns.addEventListener('click', (event) =>{
    if (event.target.tagName === 'BUTTON') {
        alert(`You clicked on ${event.target.textContent}`);
    }
});
// TASK 3





