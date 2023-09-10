let color = "black"
let click = true;


function createGrid(gridSize) {

    let container = document.querySelector('.container')
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let amount = gridSize * gridSize;

    for (let i = 0; i < amount; i++) {
        const cell = document.createElement('div');
        cell.addEventListener("mouseover", colorCell)
        cell.style.backgroundColor = "white";
        container.insertAdjacentElement("beforeend", cell);
    }
}
createGrid(16);


function colorCell() {

    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {

            this.style.backgroundColor = color;
        }
    }
}


function changeColor(choice) {
    color = choice;
}

function gridSizeInput(input) {
    if (input >= 2 || input <= 100) {
        createGrid(input);
    }
    else {
        console.log("Too Many Squares!")
    }
}

function resetGrid() {
    let container = document.querySelector('.container')
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');

}


document.querySelector('body').addEventListener('click', (e)=>{
    if(e.target.tagName != "BUTTON"){
        click = !click;
    if(click){
        document.querySelector(".mode").textContent = "Mode: Coloring"
    } else{
        document.querySelector(".mode").textContent = "Mode: Not Coloring"

    }
    }
    
});

/*


    const cells = document.querySelectorAll('.cell');

    function func(event) {
        event.target.style.background = "orange";
    }

    cells.forEach((cell) => {
        cell.addEventListener(
            "mouseover", func,
            false,
        );
    }
)


*/



