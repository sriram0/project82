var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var color = "red", width = 3, rad = 30, lastEC = false;
var my_mousedown = function(){
    lastEC = true;
}
canvas.addEventListener("mousedown", my_mousedown);
var my_mouseup = function(){
    lastEC = false;
}
canvas.addEventListener("mouseup", my_mouseup);
var my_mouseleave = function(){
    lastEC = false;
}
canvas.addEventListener("mouseleave", my_mouseleave);
var my_mousemove = function(e){
    var cpx = e.clientX - canvas.offsetLeft;
    var cpy = e.clientY - canvas.offsetTop;
    if(lastEC){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(cpx, cpy, rad, 0, 2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mousemove", my_mousemove);

var update = function(){
    color = document.getElementsByTagName("input")[0].value;
    rad = document.getElementsByTagName("input")[1].value;
}
var clearCanvas = function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 400);
}