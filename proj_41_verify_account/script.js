const codes = document.querySelectorAll('.code')

// focus curson in first code box
codes[0].focus()
codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            // stops 2 numbers in a code box
            codes[idx].value = ''
            // setTime allows 1st key in index 0
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})