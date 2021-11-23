let isMouseAlive=true;
function Katzemiau() {
    console.log("Miau, miau, miau");
}
function Katzecatch() {
    isMouseAlive=false;
   
        console.log("Katze fähngt den Mouse" )
    
}
function Katze() {
    if (isMouseAlive) {
        console.log("Die Katze versteckt sich vor der Maus")
    } else {
        console.log("Die Katze ruht sich aus")
    }
}
Katzemiau();
 Katzecatch();
Katze();