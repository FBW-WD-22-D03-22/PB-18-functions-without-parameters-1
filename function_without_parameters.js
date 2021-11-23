let isMouseAlive = true;

function miau() {
    console.log("Aufgabe 1 ) Miau, miau, miau");
}

function catchMouse() {
    let isMouseAlive = false;
    console.log("Aufgabe 2 ) Is mouse a live? =", isMouseAlive);
}

function treeClimbing() {
    // let isMouseAlive = false;
    if (isMouseAlive == true || isMouseAlive == false) {
        console.log("Aufgabe 3a ) Die Katze versteckt sich vor der Maus");
    } else {
        console.log("Aufgabe 3b ) Die Katze ruht sich aus");
    }
}

miau();
catchMouse();
treeClimbing();

