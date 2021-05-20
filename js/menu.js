 var vidas = 3;
 class menu extends Phaser.Scene{
    constructor() {
        super("menu");
    }
  
    create(){
        this.add.image(400, 300, 'fondo1');
        this.start_button = this.add.image(380,300,"empezar").setInteractive();
        this.start_button.setScale(.6);
        this.start_button.on('pointerdown',()=>{
            vidas = 3;
            this.scene.start('nivel1');
        });

        //setting the footer of the authors
        this.add.text(300,config.height-20,'Videojuego "Empatines"', {
            font: "15px Arial", 
            fill: "white"
        });
    }
 
}