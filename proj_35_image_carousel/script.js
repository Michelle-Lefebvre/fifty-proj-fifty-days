const imgs = document.getElementById('imgs')
const btnLt = document.getElementById('left')
const btnRt = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')
let idx = 0
let interval = setInterval(run, 2000);

function run() {
    idx++
    changeImage()
}

/*
Get the index of all the images in the node list.
Move image 500px to change image.
*/
function changeImage() {
    if(idx > img.length -1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length -1
    }

    imgs.style.transform = `translateX(${-idx * 450}px)`
}

/* Reset interval for button clicks to work */
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

btnRt.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

btnLt.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})