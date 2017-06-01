
(function() {
  //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
  'use strict';
  ///////////////////////////
  let Rat = new LivingThing("Rat", 5);
  let Goblin = new LivingThing("Goblin", 30);
  let Ogre = new LivingThing("Ogre", 80);
  let monsters = [Rat, Goblin, Ogre];
  let hero = new Hero("Victor", 100);

  function spentHealth() {
    let rndNum = parseInt(Math.random(1, 10) * 10);
    return rndNum;
  }

  function LivingThing(monsterName, monsterHealth) {
    var name = monsterName;
    var health = monsterHealth;
    this.setHealth = function(newHealth) {
      health = newHealth;
    }
    this.getName = function() {
      return name;
    }
    this.getHealth = function() {
      return health;
    }
    this.isAlive = function() {
      if (this.getHealth() > 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  function Hero(monsterName, monsterHealth) {
    LivingThing.call(this, monsterName, monsterHealth);
    this.attack = function(beingAttacked) {
      this.setHealth(this.getHealth() - spentHealth());
      beingAttacked.setHealth(beingAttacked.getHealth() - spentHealth());
      // console.log("beingAttacked " + beingAttacked);
      console.log("Heros health = " + this.getHealth());
      console.log("Monsters health = " + beingAttacked.getHealth());
    }
    this.fight = function(monsters) {
      console.log("IN");
      for (let i = 0; i <= monsters.length - 1; i++) {
        console.log("i = " + i + " health = " + monsters[i].getHealth() + " MONSTERS NAME = " + monsters[i].getName());
        console.log("hero health = " + this.getHealth());
        while (monsters[i].getHealth() > 0 && this.getHealth() > 0) {
          this.attack(monsters[i]);
          //   if (monsters[i].getHealth() > 0) {
          //     this.attack(monsters[i]);
          console.log("in while");
        }
      }
    }
  }
  //The code below should work when you are done
  console.log("A hero emerges!");

  console.log("The noble " + hero.getName() + " has vowed to defeat the monsters and save the realm");
  console.log("Will they be victorious?");

  hero.fight(monsters);

  if (hero.isAlive()) {
    console.log("The hero, " + hero.getName() + ", prevailed!");
  } else {
    console.log(hero.getName() + " was bested by the monsters. We are doomed");
  }

})();




// function LivingThing(name, health){
//         var name = name;
//         var health = health;
//
//         this.isAlive = function(){
//             return Boolean(health);
//         }
//
//         this.getName = function(){
//             return name;
//         }
//
//         this.getHealth = function(){
//             return health;
//         }
//
//         this.setHealth = function(newHealth){
//             if(newHealth <= 0 ){
//                 newHealth = 0;
//             }
//             health = newHealth;
//         }
//     }
//
//     let creature1 = new LivingThing("Rat", 5);
//     let creature2 = new LivingThing("Goblin", 30);
//     let creature3 = new LivingThing("Ogre", 80);
//
//     var monsters = [creature1, creature2, creature3]
//
//     function getRandomInt(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//
//     function Hero(name, health) {
//       LivingThing.call(this, name, health);
//
//       this.attack = function(LivingThing){
//         let heroDamage = getRandomInt(0,10);
//         let livingThingDamage = getRandomInt(0,10);
//
//         this.setHealth(this.getHealth() - heroDamage);
//         LivingThing.setHealth(LivingThing.getHealth() - livingThingDamage);
//
//         console.log(this.getName() + "'s health (" + this.getHealth() + ") reduced by: " + heroDamage);
//         console.log(LivingThing.getName() + "'s health (" + LivingThing.getHealth() + ") reduced by: " + livingThingDamage);
//       }
//
//       this.fight = function(livingThingArray){
//         for (let i=0; i < livingThingArray.length; i++) {
//
//             while(this.isAlive() && livingThingArray[i].isAlive()){
//                 this.attack(livingThingArray[i])
//             }
//
//             if(!this.isAlive()){
//                 break;
//             }
//         }
//       }
//     }
//
//     let hero = new Hero("superman", 100)
