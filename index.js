let isMouseAlive = true;

function miau() { console.log("Miau, miau, miau");
}

function fangenMaus() {
    isMouseAlive = false;
    console.log("maus noch da!", isMouseAlive);
}

function katzeKlettern() {
    if (isMouseAlive) {
        console.log("Die Katze versteckt sich vor der Maus");
    } else {
        console.log("Die Katze ruht sich aus");
    }
}

miau()

fangenMaus()

katzeKlettern()
