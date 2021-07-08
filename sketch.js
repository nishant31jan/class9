var n;
function setup() {
  createCanvas(400,400);
 n=createSprite(200,200,20,20);
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    n.x=n.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    n.x=n.x-5
  }
  if(keyIsDown(UP_ARROW)){
    n.y=n.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    n.y=n.y+5
  }
  background(30);
drawSprites();
}




