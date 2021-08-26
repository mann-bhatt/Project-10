var sea, seaImg
var ship, shipImg
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,200,200)
  sea.addImage(seaImg)
  sea.scale = 0.3
  ship = createSprite(150,180,150,150)
  ship.addAnimation("ship", shipImg)
  ship.scale = 0.27
}

function draw() {
   background("blue");
  sea.velocityX = -2
  if(sea.x<-200){
    sea.x = sea.width/50
  }
 drawSprites()
}