let isMouseAlive = true;

function catSaysMiau() {
    console.log("Miau, miau, miau");
}

function catchMouse() {
    isMouseAlive = false;
    console.log("Is Mouse alive?:", isMouseAlive);
}

function climbsTree() {
    if(isMouseAlive){
        console.log("Cat hids from mouse");
    } else {
        console.log("Cat is resting");
    }
}

catSaysMiau();
catchMouse();
climbsTree();