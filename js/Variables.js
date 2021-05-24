var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Escena1,menu, nivel1,nivel2, nivel3, perdio, ganar]
}
var game = new this.Phaser.Game(config);