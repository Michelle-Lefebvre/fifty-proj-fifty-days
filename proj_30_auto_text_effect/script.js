const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
let text = "We Love Programming!";
let idx = 1;
let speed = 300 / speedEl.value;
let changeText;

writeText();

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userText = document.getElementById('change_text').value;
    text = userText;
    console.log(text);
});

function writeText() {

    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);