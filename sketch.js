var seaImg;
var seablock;
var shipImg1,ship2;

function preload(){
  
  seaImg=loadImage("sea.png");
  
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

  seablock=createSprite(400,200);
  seablock.addImage("horizon",seaImg);
  seablock.scale=0.2
  
 
  ship2=createSprite(200,280,50,30);
ship2.addAnimation("rocking",shipImg1);
ship2.scale=0.15



}



function draw() {
  background("white");

  seablock.velocityX=-3

  console.log(seablock.x)

 if(seablock.x<0){
   seablock.x=seablock.width/10
 }

 drawSprites();
}