const bg = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blury =  20 - length * 2
    background.style.filter = `blur(${blury}px)`
})