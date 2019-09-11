var width = window.innerWidth;
var height = window.innerHeight;
var pixel_size = 10;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = width
canvas.height = height

function drawBoard(){
    for(var i = 0; i <= width; i += 40){
        context.moveTo(0.5 + i + pixel_size, pixel_size)
        context.lineTo(0.5 + i + pixel_size, height + pixel_size)
    }

    for(var i = 0; i <= height; i += 40){
        context.moveTo(pixel_size, 0.5 + i + pixel_size)
        context.lineTo( width + pixel_size, 0.5 + i + pixel_size)
    }
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();