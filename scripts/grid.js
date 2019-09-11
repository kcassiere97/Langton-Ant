var width = window.innerWidth;
var height = window.innerHeight;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

function drawBoard(){
    context.beginPath()

    for(var i = 0; i <= width; i += 40){
        for(var j = 0; j <= height; j += 40){
            context.rect(i, j, 40, 40);
        }
    }

    context.strokeStyle = "black";
    context.fillRect((width/2), (height/2), 40, 40);
    context.stroke();
}

drawBoard();