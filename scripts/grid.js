let width = 1600;
let height = 1600;

let start_x = width/2;
let start_y = height/2;

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = width;
canvas.height = height

function drawBoard(){
    context.beginPath()

    for(var i = 0; i <= width; i += 40){
        for(var j = 0; j <= height; j += 40){
            context.rect(i, j, 40, 40);
        }
    }

    context.strokeStyle = "black";
    context.fillRect(start_x, start_y, 40, 40);
    context.stroke();
}

function moveAnt(){
       context.beginPath();
	context.strokeStyle = "black"
       context.fillStyle = "red";
	context.fillRect(start_x, start_y, 40, 40)
	context.fillStyle = "yellow";
	context.strokeStyle = "black"
       context.fillRect(start_x += 40, start_y, 40, 40);
       context.stroke();
}

drawBoard();
setInterval(moveAnt, 3000);
//moveAnt();
//setInterval(function(){
//alert("hello"); }, 3000};
