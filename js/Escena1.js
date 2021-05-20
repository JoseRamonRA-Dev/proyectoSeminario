 class Escena1 extends Phaser.Scene{
    constructor() {
        super("Escena1");
    }
    preload(){
        console.log("LLegooo");
        this.load.image('fondo1', 'img/fondoPlay.png');
        this.load.image('empezar', 'img/play.png');
        this.load.image('perder', 'img/perder.png');
        this.load.image('ganar', 'img/ganador.png');
        this.load.image('regresar', 'img/inicio.png');
    }

    create() {
        
        this.scene.start("menu");
    }
}