import Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.esm.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#1d1d1d",
    scene: {
        preload,
        create,
        update,
    }
};

new Phaser.Game(config);

function preload(){
    // loads the image in the bg
    this.load.image('boxer1', 'assets/sprite_0.png');
}

function create(){
    // adds the img to the centre
    this.add.image(400,300,'boxer1');
}

function update(){
    // will loop through out the game
}