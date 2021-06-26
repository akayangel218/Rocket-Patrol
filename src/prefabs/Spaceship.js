// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointsValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points= pointsValue;
        this.moveSpeed = 3;
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
}