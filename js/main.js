var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });
var pontosTotais = 0; 

function preload() {
game.load.image('maca', 'imgs/maca.png');
game.load.image('cesta', 'imgs/cesta.png');
}

function create() {
labelpontos = game.add.text(700, 20, "Pontos:", { font: "20px Arial", fill: "#fff", align: "center" });
labelpontos.anchor.setTo(0.5, 0.5);
pontos = game.add.text(750, 20, "0", { font: "20px Arial", fill: "#fff", align: "center" });
pontos.anchor.setTo(0.5, 0.5);
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.arcade.gravity.y = 200;
maca =  game.add.sprite(0, 0, 'maca');
cesta = game.add.sprite(300, 300, 'cesta');
cesta.inputEnabled = true;
cesta.input.enableDrag(true);
game.physics.enable([maca,cesta], Phaser.Physics.ARCADE);
maca.body.collideWorldBounds = true;
cesta.body.collideWorldBounds = true;
cesta.body.allowGravity = false;
}

function update(){
game.physics.arcade.collide(cesta, maca, colidiuComCesta);
if(maca.y > 500){
maca.destroy();
cesta.destroy();
maca.destroy();
text = game.add.text(game.world.centerX, game.world.centerY, "Game Over!", { font: "65px Arial", fill: "#ff0044", align: "center" });
text.anchor.setTo(0.5, 0.5);
}
}

function colidiuComCesta(){
cesta.body.velocity.y = 0;
maca.destroy();
var randomX = Math.floor((Math.random() * 500) + 1);
maca =  game.add.sprite(randomX, 0, 'maca');
game.physics.enable(maca);
maca.body.collideWorldBounds = true;
pontosTotais = pontosTotais+1;
pontos.setText(pontosTotais);
}

