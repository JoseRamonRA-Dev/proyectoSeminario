 var vidas = 3;
 class menu extends Phaser.Scene{
    constructor() {
        super("menu");
    }
  
    create(){
        this.background = this.add.tileSprite(0,0, config.width, config.height, "fondo1");
        this.background.setOrigin(0,0);
        this.background.setScale(1.1);

       // this.add.image(400, 300, 'fondo1');
        this.start_button = this.add.image(config.width/2,config.height/2,"empezar").setInteractive();
        this.start_button.setScale(.6);
        this.start_button.on('pointerdown',()=>{
            vidas = 3;
            this.scene.start('nivel1');
        });

        //setting the footer of the authors
        this.add.text(config.width / 2,config.height-40,'Videojuego "Empatines"', {
            font: "15px Arial", 
            fill: "white"
        });
    }
 
}