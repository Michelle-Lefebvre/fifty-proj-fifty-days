const loveMe = document.querySelector('.loveme');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => { // could use dblclick
    // create a double click
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // get position of double clicks
    const x = e.clientX;
    const y = e.clientY;

    // get the offset from the top & left
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    // subtract to find the location inside the image
    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${ yInside }px`;
    heart.style.left = `${ xInside }px`;

    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;

    // remove each heart after liked
    setTimeout(() => heart.remove(), 1000);
}