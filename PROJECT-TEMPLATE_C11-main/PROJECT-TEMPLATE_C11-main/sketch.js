
var barco_navegando, mar, marImage, barco;




function preload(){
barco_navegando = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
marImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(200,190,10,20);
  mar.addImage("mar", marImage)
 
  mar.x = mar.width /2;
  mar.velocityX = -4;
  mar.scale = 0.3;
  
  barco = createSprite(200,200,50,50);
  barco.addAnimation("navegando", barco_navegando);
  barco.scale = 0.2;


}

function draw() {
  background("sea.png");
    drawSprites();

 
}
