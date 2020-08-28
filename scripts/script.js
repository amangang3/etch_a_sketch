gridSize = 16;

function createGrid() {
    let container = document.getElementById('gridContainer');
    container.innerHTML = '';
    var lengthOfBox = Math.floor(window.innerWidth / gridSize);
    for (var i = 0; (lengthOfBox * lengthOfBox); i++) {
        var box = document.createElement('div');
        box.className = 'box';
        container.appendChild(box);
    }
}