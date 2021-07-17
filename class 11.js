var b1;
var b2;
var road1;
var roadImg;
var run1,runImg;

function preload()
{
  roadImg=loadImage("path.png");
  runImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup()
{
createCanvas(400,400);

road1=createSprite(200,200,20,20);
road1.addImage("road",roadImg);
road1.scale=1.2;

run1=createSprite(250,250,20,40);
run1.addAnimation("run",runImg);
run1.scale=0.07

b1=createSprite(20,200,40,400);
b1.visible=false;

b2=createSprite(380,200,40,400);
b2.visible=false;

}

function draw() 
{
 background("green");

road1.velocityY=3;

  if(road1.y>400)
  {
    road1.y=200;
  }

  if(keyDown("RIGHT"))
  {
    run1.x=run1.x+4;
  }
  if(keyDown("LEFT"))
  {
    run1.x=run1.x-4;
  }

  run1.collide(b1);
  run1.collide(b2);

drawSprites(); 
}
