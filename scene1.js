class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: "Scene1"});
    }

    preload() {
        this.load.image('skybox', 'assets/environment/back.png');
    }

    create() {
        this.add.tileSprite(0, 0, 1024, 768, 'skybox').setScale(2);
    }
}