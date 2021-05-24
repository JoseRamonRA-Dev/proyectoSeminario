class ganar extends Phaser.Scene{
    constructor() {
        super("ganar");
    }

    create(){

    //this.add.image(400, 300, 'ganar');
    this.background = this.add.tileSprite(0,0, config.width, config.height, "ganar");
    this.background.setOrigin(0,0);
    this.background.setScale(1.1);
    //Regresar
    this.botonr = this.add.image(config.width * 0.90,config.height * 0.85,"regresar").setInteractive();
    this.botonr.setScale(.2);
    this.botonr.on('pointerdown',()=>{
        this.scene.start('menu');
    });

    }
     
   
    update(){
        
    }
}