class perdio extends Phaser.Scene{
    constructor() {
        super("perdio");
    }

    create(){

    //this.add.image(400, 300, 'perder');
    this.background = this.add.tileSprite(0,0, config.width, config.height, "perder");
    this.background.setOrigin(0,0);
    this.background.setScale(1.05);
    //Regresar
    this.botonr = this.add.image(config.width /2,config.height * 0.80,"regresar").setInteractive();
    this.botonr.setScale(.2);
    this.botonr.on('pointerdown',()=>{
        this.scene.start('menu');
    });

    }
     
   
    update(){
        
    }
}