canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="Blue";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    Radius = document.getElementById("Radius").value;
    color= document.getElementById("Color").value;
    mouseEvent="mouseDown";

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

    mouseEvent="mouseleave";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

    current_position_mouse_x= e.clientX - canvas.offsetLeft; 
    
    current_position_mouse_y= e.clientY - canvas.offsetTop; 

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.strokeWidth=width_of_line;
        console.log("current position of x and y=");
        console.log("x="+current_position_mouse_x+ "y="+current_position_mouse_y);
       ctx.arc(current_position_mouse_x, current_position_mouse_y, Radius,0,2 * Math.PI);
        ctx.stroke();
    }
}
