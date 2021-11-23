
let isMouseAlive = true;

function miau() {
    console.log("Miau, miau, miau!");
}
function maus(){
    isMouseAlive = false
    console.log("Is Mouse alive?",isMouseAlive);
}
function einenBaumklettern(){
    if (isMouseAlive) {
        console.log("Die Katze versteckt sich vor der Maus");
    } else {
        console.log("Die Katze ruht sich aus")
    }
}

miau();
maus();
einenBaumklettern();

