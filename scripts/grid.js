let width = Math.pow(41,2);
let height = Math.pow(41,2);

let start_x = Math.floor(width/2);
let start_y = Math.floor(height/2);

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

grid = [];

class Rectangle {
    //color is a number (0-3), width and height are also numbers
    constructor(x, y, color, width, height){
        this.pos = {x_pos: x, y_pos: y};
        this.color = color;
        this.width = width;
        this.height = height;

        //if the color is black=0 or red=1, binary == 1, else it is 0
        this.binary = 1;
    }    
}

function drawBoard(){
    
    //construct rectangle objects and assign them to their locations in grid array
    for(var i = 0; i < 41; i++){
        grid[i] = [];
        for(var j = 0; j < 41; j++){
            grid[i][j] = new Rectangle((i == 0) ? 0 : i * 41,(j == 0) ? 0 : j * 41 ,0, 41, 41);
        }
    }
    
    //draw the visual rectangles by accessing the grid array
    context.beginPath()
    for(var i = 0; i < 41; i++){
        for(var j = 0; j < 41; j++){
            context.rect(i*41, j*41, grid[i][j].width, grid[i][j].height);
        }
    }

    //outline of all the squares we just drew
    context.strokeStyle = "black";

    //now draw them to the screen
    context.stroke();

    //construct ant
    middle_element = grid[Math.floor(grid.length/2)][Math.floor(grid.length/2)];
    context.beginPath()
    context.clearRect(middle_element.pos.x_pos, middle_element.pos.y_pos, middle_element.width, middle_element.height);
    context.rect(middle_element.pos.x_pos, middle_element.pos.y_pos, middle_element.width, middle_element.height);
    context.stroke();
    // context.beginPath();
    // context.fillStyle = "green";
    // context.fillRect(Math.floor(grid.length*41/2), Math.floor(grid.length*41/2), 41, 41);
    // context.stroke();
}

function drawAnt(){
    //draw small white triangle
}

function moveAnt(){
    //move small white triangle
}

drawBoard();
setInterval(moveAnt, 3000);