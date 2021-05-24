var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
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