 let isMouseAlive = true;

//1.)
// miauen
function miau() {
   if(isMouseAlive){  
       console.log("miau");       
    } else {          
    }
}

miau();


//2.)

 isMouseAlive = false;

// maus fangen
function catchMouse(){
    if (isMouseAlive) {
        console.log("... miau ...");
    } else {
        console.log("... cat catches mouse ...")
    }
}

catchMouse();

//3.)
//A

function climbTree(){
    if (isMouseAlive == true) {
        console.log("Die Katze versteckt sich vor der Maus");
    } else {
        console.log("Die Katze ruht sich aus");
    }
}


climbTree();