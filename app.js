
//set variables for screen size selection
let small = 256;
let medium = 1024;
let large = 1600;

//set variables for board element button, and color element
const board = document.getElementById('board');
const clearBtn = document.getElementById('clear');
let color = document.getElementById('color').value; 



//initally fill in small board 
fill(small);

//if clicked call clear function
clearBtn.addEventListener('click', clear);

//initally was going to make a function for event listeners for the grid elements
//but instead just put it inside the fill function. However will leave it here

// document.querySelectorAll('.grid').forEach(item => {
//     item.addEventListener('mouseover', function () {
//         item.style.backgroundColor = color;
//     });
// });


//changes board when select element changes. Gets called from the html onchange attribute
function boardSelect() {
    let x = parseInt(document.getElementById("size").value);
    clear()
    switch(x) {
        case 16:
            board.style.width = "320px";
            board.style.height = "320px";
            fill(small);
            break;
        case 32:
            board.style.width = "640px";
            board.style.height = "640px";
            fill(medium);
            break;
        case 40:
            board.style.width = "800px";
            board.style.height = "800px";
            fill(large);
            break;
    } 
}

//fill in the grid with div elements repersenting the grid
function fill(gridSize){
    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('grid');
        board.appendChild(div);

        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = color;
        });
        
    };
}

//clear the background color of div elements
function clear(){
    grids = document.querySelector('#board').children;
    console.log(grids);
    for (let grid of grids){
        grid.style.backgroundColor = 'white';
        console.log(grid.backgroundColor);
    };
}

//when color changes in the color input tag this will be called and changed color var here
function changeColor() {
    color = document.getElementById('color').value; 
    // let hover = document.getElementsByClassName('hover');
    // $('.hover').css('background-color', color)

}

