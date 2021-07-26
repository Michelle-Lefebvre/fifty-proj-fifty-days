const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// to automatically have cursor on text area
textarea.focus();

// listen for typing
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});

// listen for comma to create tags 
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() != '').map(tag => tag.trim());

    tagsEl.innerHTML = ''; // clear tag

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30; // number of times it will highlight tags before selection

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('hightlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('hightlight');
}