let isKatze = true;
let mouse = true;

let isMouseAlive = false;


// Aufgabenstellung - Teil 1
function miauen() {
        console.log("Miau, miau, miau");
}
// Aufgabenstellung - Teil 2
function catchMouse(){
    if (isMouseAlive) {
        console.log("Die Katze versteckt sich vor der Maus");
    }
}

// Aufgabenstellung - Teil 3
function catchMouse(){
    if (isMouseAlive) {
        console.log("Die Katze versteckt sich vor der Maus");
    } else {
        console.log("Die Katze ruht sich aus");
    }
}

// Aufgabenstellung - Teil 1
miauen();
catchMouse();
// Aufgabenstellung - Teil 2
isMouseAlive = true;
catchMouse();
// Aufgabenstellung - Teil 3
isMouseAlive = false;
catchMouse();