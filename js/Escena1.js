 class Escena1 extends Phaser.Scene{
    constructor() {
        super("Escena1");
    }
    preload(){
        console.log("LLegooo");
        this.load.image('fondo1', 'assets/img/videojuego/fondoPlay.png');
        this.load.image('empezar', 'assets/img/videojuego/play.png');
        this.load.image('perder', 'assets/img/videojuego/perder.png');
        this.load.image('ganar', 'assets/img/videojuego/ganador.png');
        this.load.image('regresar', 'assets/img/videojuego/inicio.png');
    }

    create() {
        
        this.scene.start("menu");
    }
}