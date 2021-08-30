const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        // location of click in viewport
        const x = e.clientX;
        const y = e.clientY;
        console.log(x, y, "location of click in viewport");

        // location of button
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        console.log(buttonTop, buttonLeft, "button location top left");

        // location of click inside button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        console.log(xInside, yInside, "location of click inside button area");

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        // must remove the circle that was created by the click
        setTimeout(() => circle.remove(), 500);
    });
});