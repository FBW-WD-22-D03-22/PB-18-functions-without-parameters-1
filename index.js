
 let isMouseAlive = true
 // 1)
function miauen() {
       console.log("miau , miau ,miau");
    
 }
// // 2)
  function mausFangen() {
          isMouseAlive = false;
          console.log("Is Mouse alive?:", isMouseAlive);
     
 }

// // 3)
  function baumKlettern() {

     if (isMouseAlive){

          console.log("Die Katze versteckt sich vor der Maus")

      }else{ console.log("Die Katze ruht sich aus")

     }
     }
     
  miauen()
//   mausFangen()
  baumKlettern()








