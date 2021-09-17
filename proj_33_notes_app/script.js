// to display localStorage on refresh
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach(note => addNewNote(note));
}

// to add a new note
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const {
            value
        } = e.target;

        main.innerHTML = marked(value);
        updateLS();
    });


    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
}

// to delete all notes in local storage permenately
const clearBtn = document.getElementById('clear-all');
clearBtn.addEventListener('click', clearLS());

function clearLS() {

    window.localStorage.clear(notes);
    // window.location.reload(true);
    // localStorage.clear();
    // localStorage.removeItem('notes');
    // updateLS();
    // location.reload();

}

/*
How Local Storage api works with key value pairs. 
Can only store strings in local storage. 
To View in console/application/Storage/LocalStorage/http...

// ADD
localStorage.setItem('name', 'Michelle');
// Get
localStorage.getItem('name');
// Delete
localStorage.removeItem('name');
*/
/*
If you have an object or an array it must be stringified.

const names = [
    'Michelle',
    'Marlo',
    'Mickey',
    'Mitch'
];
// ADD
localStorage.setItem('names', JSON.stringify(names));
// Get
JSON.parse(localStorage.getItem('names'));
// Delete
localStroage.clear()

NOTE: sessionStorage works the same way as localStorage but if you close the browser the info is gone.
*/