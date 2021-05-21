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
var dulces2;
var vidas = 3;
var terminar = false;
var vidasJuego;
var ban1 = 0;

class nivel2 extends Phaser.Scene{
    constructor() {
        super("nivel2");
    }
  
 
     preload ()
    {
        this.load.image('fondon2', 'assets/img/videojuego/fondoNivel2.png');
        this.load.image('dulce2', 'assets/img/videojuego/pastel.png');
        this.load.image('bomba', 'assets/img/videojuego/bomba.png');
        this.load.image('trofeo', 'assets/img/videojuego/trofeo.png');
        this.load.image('vida', 'assets/img/videojuego/vida.png');
        this.load.image('vida1', 'assets/img/videojuego/vida1.png');
        this.load.image('cas', 'assets/img/videojuego/casco1.png');
        this.load.image('nunca', 'assets/img/videojuego/nunca.png');
        this.load.image('casinunca', 'assets/img/videojuego/casinunca.png');
        this.load.image('pocasveces', 'assets/img/videojuego/pocasveces.png');
        this.load.image('muchasveces', 'assets/img/videojuego/muchasveces.png');
        this.load.image('pregunta2', 'assets/img/videojuego/pregunta2.png');
        this.load.image('siempre', 'assets/img/videojuego/siempre.png');
        this.load.image('piso', 'assets/img/videojuego/plataforma1.png');
        this.load.image('rampas', 'assets/img/videojuego/bloc.png');
        this.load.spritesheet('anima', 'assets/img/videojuego/sprite.png', { frameWidth: 60, frameHeight: 100 });
    }
    
     create ()
    {
        //Añadir una imagen de fondo
        this.add.image(400, 300, 'fondon2');
        // The player and its settings
        jugador = this.physics.add.sprite(100, 450, 'anima');
        plataformas = this.physics.add.staticGroup();
        vidasJuego = this.physics.add.staticGroup();
        
        plataformas.create(150,460,"rampas");
        plataformas.create(650,160,"rampas");
        plataformas.create(350,300,"rampas");
        plataformas.create(150,140,"rampas");
        plataformas.create(650,560,"rampas");
        
// 
jugador.setBounce(0.2);
jugador.setCollideWorldBounds(true);
        
        plataformas.create(400,600,"piso").refreshBody();
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
            vidasJuego.create(690,30,"vida1");
            vidasJuego.create(730,30,"vida1");
            vidasJuego.create(770,30,"vida1");
        }else if(vidas == 2){
            vidasJuego.create(690,30,"vida");
            vidasJuego.create(730,30,"vida1");
            vidasJuego.create(770,30,"vida1");
        }else if(vidas ==1){
            vidasJuego.create(690,30,"vida");
            vidasJuego.create(730,30,"vida");
            vidasJuego.create(770,30,"vida1");
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
        dulces2 = this.physics.add.group({
            key: 'dulce2',
            repeat: 10,
            setXY: { x: 30, y: 0, stepX: 70 }
        });
        
        dulces2.children.iterate(function (child) {
        
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
        });

        this.physics.add.collider(jugador, plataformas);
        this.physics.add.collider(dulces2, plataformas);
        this.physics.add.collider(enemigo, plataformas);
        this.physics.add.collider(enemigo1, plataformas);
        //Cuando chocab
        this.physics.add.overlap(jugador, dulces2, this.choque, null, this);
        this.physics.add.collider(jugador,enemigo, this.muerte,null,this);
        this.physics.add.collider(jugador,enemigo1, this.muerte,null,this);
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

        if ((dulces2.countActive(true) === 0) && (ban1 == 0))
                    {
                        preguntas = this.physics.add.staticGroup();
                        preguntas.create(380,30,"pregunta2").setScale(.6);
                        trofeos = this.physics.add.staticGroup();
                        trofeo1 = this.physics.add.staticGroup();
                        trofeo2 = this.physics.add.staticGroup();
                        trofeo3 = this.physics.add.staticGroup();
                        trofeo4 = this.physics.add.staticGroup();
                        plataformas.create(150,460,"nunca");
                        plataformas.create(650,160,"casinunca");
                        plataformas.create(350,300,"pocasveces");
                        plataformas.create(150,140,"muchasveces");
                        plataformas.create(650,560,"siempre");
                        //trofeo2 = this.physics.add.create(250,410,"ruedita").setScale(.5);
                        trofeos.create(70,415,"cas");
                        trofeo1.create(650,120,"cas");
                        trofeo2.create(390,255,"cas");
                        trofeo3.create(150,100,"cas");
                        trofeo4.create(650,520,"cas");
                        jugador.x = 500;
                        jugador.y = 300;
                        //Cuando chocab
                        this.physics.add.collider(jugador, trofeos, this.choque2, null, this);
                        this.physics.add.collider(jugador, trofeo1, this.choque3, null, this);
                        this.physics.add.collider(jugador, trofeo2, this.choque4, null, this);
                        this.physics.add.collider(jugador, trofeo3, this.choque5, null, this);
                        this.physics.add.collider(jugador, trofeo4, this.choque6, null, this);
                        ban1 =1;
                    }
        
    }

    choque (jugador, dulces2)
    {
        dulces2.disableBody(true, true);
    }
    choque2 ()
    {
        console.log("Eligio -Nunca-")
        this.scene.start('nivel3');
    }
    choque3 ()
    {
        console.log("Eligio -Casi nunca-");
        this.scene.start('nivel3');
    }
    choque4 ()
    {
        console.log("Eligio -Pocas veces-");
        this.scene.start('nivel3');
    }
    choque5 ()
    {
        console.log("Eligio -Muchas veces");
        this.scene.start('nivel3');
    }
    choque6 ()
    {
        console.log("Eligio -Siempre-");
        this.scene.start('nivel3');
    }
    muerte(jugador,enemigos){
        //this.physics.pause();
        //vidasJuego.disableBody(true,true);
        if(vidas==3){
            vidasJuego.create(690,30,"vida");
            
        }else if(vidas==2){
            vidasJuego.create(730,30,"vida");
        }
        else{
            vidasJuego.create(770,30,"vida");
            this.physics.pause();
            audioPlay.stop();
            this.scene.start('perdio');
             
        }
        vidas-=1;
        enemigos.x = 300;
        enemigos.y=20;
    }
}