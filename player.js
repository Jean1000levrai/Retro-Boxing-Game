import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.esm.js";

export class Boxer{
    constructor(scene, name, imgKey, coo = [400, 300], flip = false){
        this.name = name
        this.scene = scene
        this.flip = flip
        this.coo = coo

        // img
        console.log(this.scene.textures.exists(imgKey));
        this.scene.textures.get(imgKey).setFilter(Phaser.Textures.FilterMode.NEAREST);
        this.boxer1 = this.scene.add.image(this.coo[0], this.coo[1], imgKey);
        this.boxer1.setScale(15);
        this.boxer1.flipX = this.flip
    }

    changeState(imgKey) {
        this.scene.textures.get(imgKey).setFilter(Phaser.Textures.FilterMode.NEAREST);
        this.boxer1.setTexture(imgKey);
    };
}