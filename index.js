
let isMouseAlive = true;

// miauen
function miauen() {
    console.log("Miau, miau, miau");
}

// fangen
function fangen() {
   let isMouseAlive = false
}

// klettern
function klettern(){
    if (isMouseAlive) {
        console.log( "Die Katze versteckt sich vor der Maus");
    } else {
        console.log("Die Katze ruht sich aus")
    }
}

miauen()
fangen()
klettern()
