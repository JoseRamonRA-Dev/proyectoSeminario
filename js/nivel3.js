var jugador;
var plataformas;
var trofeos;
var trofeo1;
var trofeo2;
var trofeo3;
var trofeo4;
var preguntas;
var enemigos;
var cursors;
var puntos = 0;
var dulces3;
var vidas = 3;
var terminar = false;
var vidasJuego;
var enemigosfuego;
var ban3 =0;
class nivel3 extends Phaser.Scene{
    constructor() {
        super("nivel3");
    }
  
 
     preload ()
    {
        this.load.image('fondon3', 'assets/img/videojuego/fondoNivel3.png');
        this.load.image('dulce3', 'assets/img/videojuego/paleta2.png');
        this.load.image('bomba', 'assets/img/videojuego/bomba.png');
        this.load.image('trofeo', 'assets/img/videojuego/trofeo.png');
        this.load.image('vida', 'assets/img/videojuego/vida.png');
        this.load.image('vida1', 'assets/img/videojuego/vida1.png');
        this.load.image('rod', 'assets/img/videojuego/rodilleras.png');
        this.load.image('fuego', 'assets/img/videojuego/fuego.png');
        this.load.image('nunca', 'assets/img/videojuego/nunca.png');
        this.load.image('casinunca', 'assets/img/videojuego/casinunca.png');
        this.load.image('pocasveces', 'assets/img/videojuego/pocasveces.png');
        this.load.image('muchasveces', 'assets/img/videojuego/muchasveces.png');
        this.load.image('pregunta3', 'assets/img/videojuego/pregunta3.png');
        this.load.image('siempre', 'assets/img/videojuego/siempre.png');
        this.load.image('piso', 'assets/img/videojuego/plataforma1.png');
        this.load.image('rampas', 'assets/img/videojuego/bloc.png');
        this.load.spritesheet('anima', 'assets/img/videojuego/sprite.png', { frameWidth: 60, frameHeight: 100 });
    }
    
     create ()
    {
        //Añadir una imagen de fondo
        this.fondoN3 = this.add.tileSprite(0,0, config.width, config.height, "fondon3");
        this.fondoN3.setOrigin(0,0);
        this.fondoN3.setScale(1.05);
        //this.add.image(400, 300, 'fondon3');
        // The player and its settings
        jugador = this.physics.add.sprite(100, 450, 'anima');
        plataformas = this.physics.add.staticGroup();
        vidasJuego = this.physics.add.staticGroup();
        enemigosfuego = this.physics.add.staticGroup();
        
    
        plataformas.create(config.width * 0.40,config.height * 0.62,"rampas");
        plataformas.create(config.width * 0.70,config.height * 0.62,"rampas");
        plataformas.create(config.width * 0.5,config.height * 0.35,"rampas");
        plataformas.create(config.width * 0.25,config.height * 0.90,"rampas");
        plataformas.create(config.width * 0.85,config.height * 0.90,"rampas");

        enemigosfuego.create(config.width * 0.54,config.height * 0.64,"fuego").setScale(1.4);
        enemigosfuego.create(config.width * 0.57,config.height * 0.64,"fuego").setScale(1.4);
        enemigosfuego.create(config.width * 0.12,config.height * 0.90,"fuego").setScale(1.4);
        enemigosfuego.create(config.width * 0.95,config.height * 0.82,"fuego").setScale(1.4);
        enemigosfuego.create(config.width * 0.40,config.height * 0.28,"fuego").setScale(1.4);
        
// 
        jugador.setBounce(0.2);
        jugador.setCollideWorldBounds(true);
        
        plataformas.create(config.width/2,config.height-5,"piso").refreshBody();
        enemigos = this.physics.add.group();
        var long = (jugador.x<400)? Phaser.Math.Between(400,800):Phaser.Math.Between(0,400);
        var enemigo = enemigos.create(long,16,"bomba");
        enemigo.setBounce(1);
        enemigo.setCollideWorldBounds(true);
        enemigo.setVelocity(Phaser.Math.Between(-200,200),20);

        var long1 = (jugador.x<400)? Phaser.Math.Between(400,800):Phaser.Math.Between(0,400);
        var enemigo1 = enemigos.create(long1,16,"bomba");
        enemigo1.setBounce(1);
        enemigo1.setCollideWorldBounds(true);
        enemigo1.setVelocity(Phaser.Math.Between(-200,200),20);
        if(vidas == 3){
            vidasJuego.create(config.width-125,30,"vida1");
            vidasJuego.create(config.width-90,30,"vida1");
            vidasJuego.create(config.width-55,30,"vida1");
        }else if(vidas == 2){
            vidasJuego.create(config.width-125,30,"vida");
            vidasJuego.create(config.width-90,30,"vida1");
            vidasJuego.create(config.width-55,30,"vida1");
        }else if(vidas ==1){
            vidasJuego.create(config.width-125,30,"vida");
            vidasJuego.create(config.width-90,30,"vida");
            vidasJuego.create(config.width-55,30,"vida1");
        }
        
        
        //  para caminar
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('anima', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'anima', frame: 7 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('anima', { start: 5, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
    
        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();
        dulces3 = this.physics.add.group({
            key: 'dulce3',
            repeat: 9,
            setXY: { x: 40, y: 0, stepX: 130 }
        });
        
        dulces3.children.iterate(function (child) {
        
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
        });

        this.physics.add.collider(jugador, plataformas);
        this.physics.add.collider(dulces3, plataformas);
        this.physics.add.collider(enemigo, plataformas);
        this.physics.add.collider(enemigo1, plataformas);
        //Cuando chocab
        this.physics.add.overlap(jugador, dulces3, this.choque, null, this);
        this.physics.add.collider(jugador,enemigo, this.muerte,null,this);
        this.physics.add.collider(jugador,enemigo1, this.muerte,null,this);
        this.physics.add.collider(jugador,enemigosfuego, this.muerte2,null,this);

        this.pause1 = this.add.image(20, 25,'pause').setInteractive();
        this.pause1.setScale(.1);
        this.pause1.on('pointerdown',()=>{
            audioPlay.stop();
            });

        this.play1 = this.add.image(50, 25,'playI').setInteractive();
        this.play1.setScale(.1);
        this.play1.on('pointerdown',()=>{
            audioPlay.play();
            });
    }
    
     update ()
    {
        if (terminar)
        {
            return;
        }
    
        if (cursors.left.isDown)
        {
            jugador.setVelocityX(-160);
            jugador.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            jugador.setVelocityX(160);
            jugador.anims.play('right', true);
        }
        else
        {
            jugador.setVelocityX(0);
            jugador.anims.play('turn');
        }
    
        if (cursors.up.isDown && jugador.body.touching.down)
        {
            jugador.setVelocityY(-340);
        }

        if ((dulces3.countActive(true) === 0) && (ban3 ==0))
                    {
                        preguntas = this.physics.add.staticGroup();
                        preguntas.create(config.width/2,50,"pregunta3").setScale(1);
                        trofeos = this.physics.add.staticGroup();
                        trofeo1 = this.physics.add.staticGroup();
                        trofeo2 = this.physics.add.staticGroup();
                        trofeo3 = this.physics.add.staticGroup();
                        trofeo4 = this.physics.add.staticGroup();
                        
                        plataformas.create(config.width * 0.40,config.height * 0.62,"nunca");
                        plataformas.create(config.width * 0.70,config.height * 0.62,"casinunca");
                        plataformas.create(config.width * 0.5,config.height * 0.35,"pocasveces");
                        plataformas.create(config.width * 0.25,config.height * 0.90,"muchasveces");
                        plataformas.create(config.width * 0.85,config.height * 0.90,"siempre");
                        //trofeo2 = this.physics.add.create(250,410,"ruedita").setScale(.5);
                        trofeos.create(config.width * 0.50,config.height * 0.55,"rod");
                        trofeo1.create(config.width * 0.60,config.height * 0.55,"rod");
                        trofeo2.create(config.width * 0.5,config.height * 0.28,"rod");
                        trofeo3.create(config.width * 0.18,config.height * 0.83,"rod");
                        trofeo4.create(config.width * 0.90,config.height * 0.83,"rod");
                        
                        jugador.x = 600;
                        jugador.y = 350;
                        //Cuando chocab
                        this.physics.add.collider(jugador, trofeos, this.choque2, null, this);
                        this.physics.add.collider(jugador, trofeo1, this.choque3, null, this);
                        this.physics.add.collider(jugador, trofeo2, this.choque4, null, this);
                        this.physics.add.collider(jugador, trofeo3, this.choque5, null, this);
                        this.physics.add.collider(jugador, trofeo4, this.choque6, null, this);
                        ban3 =1;
                    }
        
    }

    choque (jugador, dulces3)
    {
        dulces3.disableBody(true, true);
    }
    choque2 ()
    {
        console.log("Eligio -Nunca-")
        audioPlay.stop();
        this.scene.start('ganar');
    }
    choque3 ()
    {
        console.log("Eligio -Casi nunca-");
        audioPlay.stop();
        this.scene.start('ganar');
    }
    choque4 ()
    {
        console.log("Eligio -Pocas veces-");
        audioPlay.stop();
        this.scene.start('ganar');
    }
    choque5 ()
    {
        console.log("Eligio -Muchas veces");
        audioPlay.stop();
        this.scene.start('ganar');
    }
    choque6 ()
    {
        console.log("Eligio -Siempre-");
        audioPlay.stop();
        this.scene.start('ganar');
    }
    muerte(jugador,enemigos){
        //this.physics.pause();
        //vidasJuego.disableBody(true,true);
        if(vidas==3){
            vidasJuego.create(config.width-125,30,"vida");
        }else if(vidas==2){
            vidasJuego.create(config.width-90,30,"vida");
        }
        else{
            vidasJuego.create(config.width-55,30,"vida");
            this.physics.pause();
            audioPlay.stop();
            this.scene.start('perdio');
             
        }
        vidas-=1;
        enemigos.x = config.width/2;
        enemigos.y=20;
    }
    muerte2(jugador,enemigos){
        //this.physics.pause();
        //vidasJuego.disableBody(true,true);
        if(vidas==3){
            vidasJuego.create(config.width-125,30,"vida");
        }else if(vidas==2){
            vidasJuego.create(config.width-90,30,"vida");
        }
        else{
            vidasJuego.create(config.width-55,30,"vida");
            this.physics.pause();
            audioPlay.stop();
            this.scene.start('perdio');
             
        }
        vidas-=1;
        jugador.x = 70;
        jugador.y = 450;
    }
}