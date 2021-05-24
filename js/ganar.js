class ganar extends Phaser.Scene{
    constructor() {
        super("ganar");
    }

    create(){

    this.add.image(400, 300, 'ganar');
    //Regresar
    this.botonr = this.add.image(700,500,"regresar").setInteractive();
    this.botonr.setScale(.2);
    this.botonr.on('pointerdown',()=>{
        this.scene.start('menu');
    });

    }
     
   
    update(){
        
    }
}