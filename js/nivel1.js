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
var dulces;
var vidas = 3;
var terminar = false;
var vidasJuego;
var ban = 0;
var audioP;
var audioPlay;

class nivel1 extends Phaser.Scene{
    constructor() {
        super("nivel1");
    }
  
 
     preload ()
    {
        this.load.image('fondo', 'assets/img/videojuego/fondoNivel1.png');
        this.load.image('dulce', 'assets/img/videojuego/dulces.png');
        this.load.image('bomba', 'assets/img/videojuego/bomba.png');
        this.load.image('trofeo', 'assets/img/videojuego/trofeo.png');
        this.load.image('vida', 'assets/img/videojuego/vida.png');
        this.load.image('vida1', 'assets/img/videojuego/vida1.png');
        this.load.image('ruedita', 'assets/img/videojuego/rueda.png');
        this.load.image('nunca', 'assets/img/videojuego/nunca.png');
        this.load.image('casinunca', 'assets/img/videojuego/casinunca.png');
        this.load.image('pocasveces', 'assets/img/videojuego/pocasveces.png');
        this.load.image('muchasveces', 'assets/img/videojuego/muchasveces.png');
        this.load.image('pregunta', 'assets/img/videojuego/pregunta1.png');
        this.load.image('siempre', 'assets/img/videojuego/siempre.png');
        this.load.image('pause', 'assets/img/videojuego/pause.png');
        this.load.image('playI', 'assets/img/videojuego/play1.png');
        this.load.image('piso', 'assets/img/videojuego/plataforma1.png');
        this.load.image('rampas', 'assets/img/videojuego/bloc.png');
        this.load.audio("audiopierde","assets/audio/audio2derrota.mp3");
        this.load.audio("play","assets/audio/audio_fondo3.mp3");
        this.load.spritesheet('anima', 'assets/img/videojuego/sprite.png', { frameWidth: 60, frameHeight: 100 });
    }
    
     create ()
    {
        //Añadir una imagen de fondo
        this.fondoN1 = this.add.tileSprite(0,0, config.width, config.height, "fondo");
        this.fondoN1.setOrigin(0,0);
        this.fondoN1.setScale(1.05);
        //this.add.image(400, 300, 'fondo');
        // The player and its settings
        jugador = this.physics.add.sprite(100, 450, 'anima');
        plataformas = this.physics.add.staticGroup();
        vidasJuego = this.physics.add.staticGroup();
    
        plataformas.create(config.width * 0.25,config.height * 0.8,"rampas");
        plataformas.create(config.width * 0.15,config.height * 0.35,"rampas");
        plataformas.create(config.width * 0.85,config.height * 0.4,"rampas");
        plataformas.create(config.width * 0.5,config.height * 0.55,"rampas");
        plataformas.create(config.width * 0.8,config.height * 0.9,"rampas");

        audioP = this.sound.add("audiopierde",{loop:false});
        audioPlay = this.sound.add("play",{loop:false});
        audioPlay.play();
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
        vidasJuego.create(config.width-125,30,"vida1");
        vidasJuego.create(config.width-90,30,"vida1");
        vidasJuego.create(config.width-55,30,"vida1");
        
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
        dulces = this.physics.add.group({
            key: 'dulce',
            repeat: 14,
            setXY: { x: 45, y: 0, stepX: 80 }
        });
        
        dulces.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        this.physics.add.collider(jugador, plataformas);
        this.physics.add.collider(dulces, plataformas);
        this.physics.add.collider(enemigo, plataformas);

        //Cuando chocab
        this.physics.add.overlap(jugador, dulces, this.choque, null, this);
        this.physics.add.collider(jugador,enemigo, this.muerte,null,this);

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

        if ((dulces.countActive(true) === 0) && (ban == 0))
                    {
                        preguntas = this.physics.add.staticGroup();
                        preguntas.create(config.width/2,50,"pregunta").setScale(1);
                        trofeos = this.physics.add.staticGroup();
                        trofeo1 = this.physics.add.staticGroup();
                        trofeo2 = this.physics.add.staticGroup();
                        trofeo3 = this.physics.add.staticGroup();
                        trofeo4 = this.physics.add.staticGroup();

                        plataformas.create(config.width * 0.25,config.height * 0.8,"nunca");
                        plataformas.create(config.width * 0.15,config.height * 0.35,"casinunca");
                        plataformas.create(config.width * 0.85,config.height * 0.4,"pocasveces");
                        plataformas.create(config.width * 0.5,config.height * 0.55,"muchasveces");
                        plataformas.create(config.width * 0.8,config.height * 0.9,"siempre");
                        //trofeo2 = this.physics.add.create(250,410,"ruedita").setScale(.5);
                        trofeos.create(config.width * 0.25,config.height * 0.73,"ruedita").setScale(.5);
                        trofeo1.create(config.width * 0.15,config.height * 0.28,"ruedita").setScale(.5);
                        trofeo2.create(config.width * 0.85,config.height * 0.33,"ruedita").setScale(.5);
                        trofeo3.create(config.width * 0.5,config.height * 0.48,"ruedita").setScale(.5);
                        trofeo4.create(config.width * 0.8,config.height * 0.83,"ruedita").setScale(.5);

                        jugador.x = 500;
                        jugador.y = 300;
                        //Cuando chocab
                        this.physics.add.collider(jugador, trofeos, this.choque2, null, this);
                        this.physics.add.collider(jugador, trofeo1, this.choque3, null, this);
                        this.physics.add.collider(jugador, trofeo2, this.choque4, null, this);
                        this.physics.add.collider(jugador, trofeo3, this.choque5, null, this);
                        this.physics.add.collider(jugador, trofeo4, this.choque6, null, this);
                        ban = 1;
                    }
        
    }

    choque (jugador, dulces)
    {
        dulces.disableBody(true, true);
    }
    choque2 ()
    {
        console.log("Eligio -Nunca-")
        this.scene.start('nivel2');
    }
    choque3 ()
    {
        console.log("Eligio -Casi nunca-");
        this.scene.start('nivel2');
    }
    choque4 ()
    {
        console.log("Eligio -Pocas veces-");
        this.scene.start('nivel2');
    }
    choque5 ()
    {
        console.log("Eligio -Muchas veces");
        this.scene.start('nivel2');
    }
    choque6 ()
    {
        console.log("Eligio -Siempre-");
        this.scene.start('nivel2');
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
}