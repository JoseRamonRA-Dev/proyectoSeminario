class perdio extends Phaser.Scene{
    constructor() {
        super("perdio");
    }

    create(){

    this.add.image(400, 300, 'perder');
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