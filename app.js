let user = [];
let click = new Audio('./asset/sound/click.mp3');



function c() {
    click.play()
    console.log("work");
    user = [];
    document.getElementById("output").innerText = user.join("")
    if(user.length === 0) { 
        document.getElementById("output").innerText = 0 
        document.getElementById("display-on").innerText = ""
    }
}
function enter() {
    click.play()
    document.getElementById("display-on").innerText = eval(user.join(""))
    if(user.length === 0) { 
        document.getElementById("display-on").innerText = "no result for you"
    }
}
function del() {
    click.play()
    user.pop()
    document.getElementById("output").innerText = user.join("")
    if(user.length === 0) { 
        document.getElementById("output").innerText = 0 
        document.getElementById("display-on").innerText = ""
    }
}





// operator button function
function plus() {
    user.push("+");
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function lob() {
    user.push("-");
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function kun() {
    user.push("*");
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function han() {
    user.push("/");
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function dot() {
    user.push(".");
    document.getElementById("output").innerText = user.join("")
    click.play()
}

// all number button function
function one() {
    user.push(1);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function two() {
    user.push(2);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function three() {
    user.push(3);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function four() {
    user.push(4);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function five() {
    user.push(5);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function six() {
    user.push(6);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function seven() {
    user.push(7);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function eight() {
    user.push(8);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function nine() {
    user.push(9);
    document.getElementById("output").innerText = user.join("")
    click.play()
}
function zero() {
    user.push(0);
    document.getElementById("output").innerText = user.join("")
    click.play()
}


