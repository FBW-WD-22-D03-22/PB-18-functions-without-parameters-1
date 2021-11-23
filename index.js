let isMouseAlive = true;

function katze() {
    console.log("miau miau miau");
}

katze();



function fangen() {
    isMouseAlive = false;
    console.log("Die Katze ist tod.");
}

fangen();

function tom() {
    if (isMouseAlive == true) {
        console.log("Jerry versteckt sich vor Tom");
    } else {
        if (isMouseAlive == false) {
            console.log("Tom ruht sich aus");
        }
    }
}
tom();