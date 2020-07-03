
/*
***********************************************
* Justin Lao
* jlao3
* July 2nd, 2020
* **********************************************
* **********************************************
* Assignment: Rocket Patrol Mods
*
* CHANGES MADE:
* Add your own (copyright-free) background music to the Play scene (10)
* Allow the player to control the Rocket after it's fired (10)
* Create a new title screen (15)
* Display the time remaining (in seconds) on the screen (15)
*         Top Right (done by using phaser's time.remove() function and creating a new delayed clock every hit)
* Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
*         Worth 50 points and gives 5 seconds extra time
* Implement a new timing/scoring mechanism that adds time to the clock for successful hits (25)
*         Time addition goes as follows: 0.5 seconds, 1 second, 2 seconds, and 5 seconds
* **********************************************
* **********************************************
* SOURCES/CREDIT:
* Main Menu Wallpaper: Abduzeedo, "8 bit Space Wallpaper HD"
*
* Main Menu Music: quintessentialquinten, "Interstellar 8-Bit Theme", https://www.youtube.com/watch?v=RyT89q8Fcqo&t=41s
*
* Play Scene Music: HeatleyBros, "8 Bit Space Groove!", https://www.youtube.com/watch?v=Bok8nLviThg, goo.gl/jadB5E (License)
* **********************************************
*/

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// define game settings
game.settings = {
  flyerSpeed: 5,
  spaceshipSpeed: 3,
  gameTimer: 60000    
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;
