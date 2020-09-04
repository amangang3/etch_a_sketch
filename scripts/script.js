
const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};
 

function draw() {
    let flipFlop = 0; 
    container.addEventListener("click", function(e) { 
        flipFlop = flipFlop + 1; 
        stopStartDraw(e, (flipFlop)) 
        container.addEventListener("mouseover", function(e) {
            stopStartDraw(e, (flipFlop)) }) 
    })
}

function stopStartDraw(e, flipFlop) {
    if (flipFlop % 2) {
    e.target.style.background = "black"; 
    }
    else {
        ; 
    }
}

makeRows(8, 40);
draw(); 