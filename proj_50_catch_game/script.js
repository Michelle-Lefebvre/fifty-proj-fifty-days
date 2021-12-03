const screens = document.querySelectorAll('.screen')
const chooseFlowerBtn = document.querySelectorAll('.choose-flower-btn')
const startBtn = document.getElementById('start-btn')
const gameBoard = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_flower = {}

startBtn.addEventListener('click', () => screens[0].classList.add('up'))

// selecting flower
chooseFlowerBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_flower = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createFlower, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m= Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}`: m
    s = s < 10 ? `0${s}`: s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createFlower() {
    const flower = document.createElement('div')
    flower.classList.add('flower')
    const { x, y } = getRandomLocation()
    flower.style.top = `${y}px`
    flower.style.left = `${x}px`
    flower.innerHTML = `<img src="${selected_flower.src}" alt="${selected_flower.alt}" style="transform: rotate(${Math.random() * 360}deg" />`

    flower.addEventListener('click', catchFlower)
    gameBoard.appendChild(flower)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchFlower() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addFlowers()
}

function addFlowers() {
    setTimeout(createFlower, 1000)
    setTimeout(createFlower, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}