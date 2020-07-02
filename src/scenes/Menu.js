class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

      //load image
      this.load.image('title', './assets/Title_Screen.png');

      //load music
      this.load.audio('title_music', './assets/Space_Theme.mp3');
    }

    create() {
      //music
      this.music = this.sound.add('title_music');

      var musicConfig1 = {
          mute: false,
          volume: 1,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0
      }

      this.music.play(musicConfig1);

      //title display
      this.title = this.add.tileSprite(0, 0, 640, 480, 'title').setOrigin(0, 0);
      this.title.tilePositionX = 1720;
      this.title.tilePositionY = 980;

      // menu display
      let menuConfig = {
        fontFamily: 'Comic Sans MS',
        fontSize: '24px',
        backgroundColor: false,
        color: '#000000',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
      }

      //show menu text
      let centerX = game.config.width / 5.5;
      let centerY = game.config.height / 5;
      let textSpacer = 64;

    
      this.add.text(centerX, centerY - textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
      centerX = game.config.width / 2;
      centerY = game.config.height / 2;
      menuConfig.color = '#000000';
      this.add.text(centerX, centerY + textSpacer, 'Use ←→ arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
      this.add.text(centerX, centerY + textSpacer + 35, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5); 
      
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        this.music.pause();

        // easy mode
        game.settings = {
          flyerSpeed: 5,
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        this.music.pause();

        // hard mode
        game.settings = {
          flyerSpeed: 8,
          spaceshipSpeed: 4,
          gameTimer: 20000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
    }
}