let isMouseAlive = true; // Maus ist am Leben

function meow() {
  console.log("Miau, miau, miau!");
}

function catchMouse() {
  isMouseAlive = false;
  console.log("Katze hat Maus gefangen.");
}

function climbTree() {
  if (isMouseAlive) {
    console.log("Die Katze versteckt sich vor der Maus auf dem Baum.");
  } else {
    console.log("Die Katze ruht sich auf dem Baum aus.");
  }
}

meow();
catchMouse();
climbTree();
