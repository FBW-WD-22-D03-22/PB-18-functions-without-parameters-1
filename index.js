let isMouseAlive = true;

function miauen () {
    console.log("miau, miau, miau");
}

function MausFangen () {
    isMouseAlive=false;
    console.log( "Is mouse a live? =", isMouseAlive);
}
function baumklettern() {
    if (isMouseAlive) {
        console.log("Die Katze versteckt sich vor der Maus")
        
    } else {
        console.log("Die Katze ruht sich aus")
    }
}

miauen();
MausFangen();
baumklettern();