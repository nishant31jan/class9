var leaf1;
var leafImg;
var appleImg;
var apple1;
var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x=mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createLeaves();

  createApples();

  drawSprites();
}

function createApples()
{
  if(frameCount%80==0){
  apple1=createSprite(200,0,20,20);
  apple1.velocityY=3;
  apple1.scale=0.07
  apple1.x=Math.round(random(20,370));
  apple1.addImage("apple",appleImg);
}
}

function createLeaves()
{
  if(frameCount%80==0){
  leaf1=createSprite(360,40,20,20);
  leaf1.velocityY=3;
  leaf1.scale=0.07
  leaf1.x=Math.round(random(20,370));
  leaf1.addImage("leaf",leafImg);
}
}