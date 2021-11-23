
let isMouseAlive = true;

function Miau() {
    console.log("Miau, miau, miau!");
}
function fngeineMaus(){
    console.log("oben auf den Baum");
}
function einenBaumklettern(){
    if (isMouseAlive) {
        console.log("Die Katze versteckt sich vor der Maus");
    } else {
        console.log("Die Katze ruht sich aus")
    }
}

Miau();
fngeineMaus();
einenBaumklettern();
isMouseAlive = true;
