import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.esm.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#ffffff",
    scene: {
        preload,
        create,
        update,
    }
};

new Phaser.Game(config);

function preload(){
    // loads the image in the bg
    this.load.image('boxer', 'assets/sprite_0.png');
    this.load.image('boxer_jab', 'assets/sprite_1.png');
    this.load.image('boxer_hook', 'assets/sprite_2.png');
    this.load.image('boxer_uppercut', 'assets/sprite_3.png');
    this.load.image('boxer_punched', 'assets/sprite_4.png');
    this.load.image('boxer_down', 'assets/sprite_5.png');
    this.load.image('boxer_ko', 'assets/sprite_6.png');
}

function create(){
    
    // boxer1
    this.textures.get('boxer').setFilter(Phaser.Textures.FilterMode.NEAREST);
    let boxer1 = this.add.image(250, 300, 'boxer');
    boxer1.setScale(15);

    // boxer2
    this.textures.get('boxer').setFilter(Phaser.Textures.FilterMode.NEAREST);
    let boxer2 = this.add.image(550, 300, 'boxer');
    boxer2.setScale(15);
    boxer2.flipX=true;
}

function update(){
    // will loop through out the game
}