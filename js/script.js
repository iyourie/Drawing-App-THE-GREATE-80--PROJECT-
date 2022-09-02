//variables
let s_size = document.querySelectorAll('input')[0]
let p_size = document.querySelectorAll('input')[1]
let bg_color = document.querySelectorAll('input')[2]
let color = document.querySelectorAll('input')[3]
let erazer = document.querySelectorAll('button')[0]
let clear_all = document.querySelectorAll('button')[1]
let download = document.querySelectorAll('button')[2]
let c;

function setup() {//=>p5js setup function 
    s_size.onblur = () => { //=>create canva with s_size returned value
        c = createCanvas(s_size.value, s_size.value);
    }
    bg_color.onblur = () => { //=>change background color with bg_color value
        background(bg_color.value)
    }
    download.onclick = () => {//=>download the artwork in jpg format
        saveCanvas(c, "i'm creative", 'jpg');
    }
}

function draw() {//=>p5js draw function
    erazer.onclick = () => {//=>add class to span
        document.querySelectorAll('span')[4].classList.add('yes')
    }
    color.onclick = () => {//=>remove the class from that span so the user can draw after erazing 
        document.querySelectorAll('span')[4].classList.remove('yes')
    }
    if (document.querySelectorAll('span')[4].classList.contains('yes')) {//=>if the span contains the class yes enable the erazer(the tool's color change to the back ground color )
        if (mouseIsPressed) {
            fill(bg_color.value);
            stroke(bg_color.value)
        } else { //=>if mouse is not pressed remove pen effect on the canva
            noFill()
            noStroke()
        }
    } else {
        if (mouseIsPressed) {//=>  if mouse is pressed change pen color to color value
            fill(color.value);
            stroke('black')
        } else { //=>if mouse is not pressed remove pen effect on the canva
            noFill()
            noStroke()
        }
    }
    ellipse(mouseX, mouseY, p_size.value);//=>create pen with p_size.value(width and height)
    clear_all.onclick = () => {//=>clear everything from the canva (re-color the background)
        background(bg_color.value)
    }

}

