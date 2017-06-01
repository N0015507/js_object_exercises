/**
 * Let's create some objects!
 *
 * Define a an object below with the name "LivingThing".
 * Give the object a constructor that takes two properties called "name" and "health".
 *
 * Once you have your object defined, let's create some living things.
 * Create three LivingThing instances from your object, one for each of the creatures below.
 * Be sure to set each object's name and health!
 *
 * name: "Rat"
 * health: 5
 *
 * name: "Goblin"
 * health: 30
 *
 * name: "Ogre"
 * health: 80
 *
 * Finally, add each of your objects to an array called "monsters"
 *
 * Use the following function documentation if you need a refresher on how objects with constructors are defined:
 * @see https://css-tricks.com/understanding-javascript-constructors/#article-header-id-1
 *
 *
 */

(function(){

    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////


function LivingThing(monsterName, monsterHealth){
    this.name = monsterName;
    this.health = monsterHealth;
    // this.methodName = function(){
    //     // do something here
    // }
    // this.methodName2 = function(){
    //     // do something here - even reference methodName
    // }
}
let Rat = new LivingThing("Rat", 5);
let Goblin = new LivingThing("Goblin", 30);
let Ogre = new LivingThing("Ogre", 80);
let monsters = [Rat, Goblin, Ogre];

// for (let variableName of arrayName){
//     //do something here;
// }
//
// for(i-0; i <= arrayName.length -1; i++){
//         //do something here;
// }
//
// //to extend an object -
//
// function NewName(parm1, parm2, parm3){
//     OrigName.call(this, parm1, parm2, parm3)
//     this.newparmbolean = function(){
//         return true;
//     }
// }
    ///////////////////////////


    //The code below should work when you are done
    console.log("Monsters!");

    //for...of loop supported in ES6
    //not compatable before IE edge
    //@see http://www.benmvp.com/learning-es6-for-of-loop/
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    console.log("ES6 for...in");
    for (let monster of monsters) {
        console.log(monster.name + ": " + monster.health);
    }

    //just a spacer
    console.log("===================");

    //for loop loop supported before ES6
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    console.log("for loop for support before ES6");
    for (let i=0; i < monsters.length; i++) {
        console.log(monsters[i].name + ": " + monsters[i].health);
    }

})();
