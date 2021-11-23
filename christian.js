let isMouseAlive = true; // Maus ist am Leben

// 1.)
function meow() {
  console.log("Miau, miau, miau!");
}

// 2.)
function catchMouse() {
  isMouseAlive = false;
  console.log("Katze hat Maus gefangen.");
}

// 3.)
function climbTree() {
  if (isMouseAlive == true) {
    console.log("Die Katze versteckt sich vor der Maus auf dem Baum.");
  } else {
    // tritt automatisch ein, wenn isMouseAlive == false
    console.log("Die Katze ruht sich auf dem Baum aus.");
  }
}

meow();
catchMouse();
climbTree();
console.log("-------- Teste anderen Fall von climbTree() --------");
isMouseAlive = true;
climbTree();
