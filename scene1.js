class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: "scene1"});
    }

    preload() {
        //needs image
        this.load.image('GFS', 'assets/');
    }

    create() {
        this.image = this.add.image(400, 300, GFS);
    }
}