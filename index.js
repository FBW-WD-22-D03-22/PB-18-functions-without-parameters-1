
//aufgabe teil-1
function miauen(){
    console.log("miauen","aus fangen","Baum klettern");
}


//aufgabe teil-2
let isMouseAlive=true;

function fangen(){
    if (isMouseAlive){
        console.log("...The Mause is alive ")
    }else{
        console.log("die Katze die Maus gefangen hat");
    }
}

function baumKlettern(){
    if (isMouseAlive){
        console.log( "Die Katze versteckt sich vor der Maus");
    }else{
        console.log("Die Katze ruht sich aus");
    }
    
}

//aufgabe teil-3


miauen();
fangen();
baumKlettern();

