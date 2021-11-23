/*the cat and mouse*/

let isJerryAlive = true;


function Tom() {
    console.log("miau,miau,miau...");
}

function catchTheMous() {
    isJerryAlive = false;
    console.log("catch the mouse");
}

function climbOfTree() {
    if (isJerryAlive) { console.log("Tom hides from Jerry");
        
    } else { console.log("Tom is resting");
        
    }
}
//diese function war zusätzlich
function JerryAlive() {
    if (isJerryAlive) { console.log("Jerry is Alive");
        
    } else { console.log("Jery is dead");
        
    }
}

Tom();
catchTheMous();
climbOfTree();
JerryAlive();