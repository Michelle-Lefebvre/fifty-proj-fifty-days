const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="key">
        <small>e.key</small>
          ${e.key === ' ' ? 'Space' : e.key}
        </div>
        
        <div class="key">
            <small>e.keyCode</small>
            ${e.keyCode}
        </div>
        
        <div class="key">
            <small>e.code</small>
            ${e.code}
        </div>
        `
});