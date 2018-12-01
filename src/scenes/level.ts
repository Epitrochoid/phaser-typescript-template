import Phaser = require('phaser');

export class Level extends Phaser.Scene {
    private pizza: Phaser.GameObjects.Sprite;
    private player: Phaser.GameObjects.Sprite;

    constructor() {
        super({
            key: 'Level'
        });
    }

    preload(): void {
        this.load.image('pizza', '../../assets/pizza128.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude',
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }

    create(): void {
        this.add.sprite(400, 300, 'sky');

        this.pizza = this.add.sprite(400, 300, 'pizza');

    }
}
