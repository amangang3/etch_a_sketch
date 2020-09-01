
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
    let flop = 0; 
    container.addEventListener("click", function(e) { 
        flop = flop + 1; 
        stopStartDraw(e, (flop)) 
        container.addEventListener("mouseover", function(e) {
            stopStartDraw(e, (flop)) }) 
    })
}

function stopStartDraw(e, flop) {
    if (flop % 2) {
    e.target.style.background = "black"; 
    }
    else {
        ; 
    }
}

makeRows(8, 40);
draw(); 