canvas = document.getElementById('my_canvas');
ctx = canvas.getContext("2d")

rover_width = 100;
rever_heigth = 90;

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.heigth);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

windows.addEventListener("KeyDown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        //up();
        console.log("arriba");
    }

    if(keyPressed == "40"){
        //down();
        console.log("abajo");
    }

    if(keyPressed == "37"){
        //left();
        console.log("izquierda");
    }

    if(keyPressed == "39"){
        //right();
        console.log("derecha");
    }
}

function up() {
    if(rover_y >=0) {
        rover_y = rover_y - 10;
        console.log("Cuando se presiona la flecha hacia arriba, x ="+rover_x+", y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}