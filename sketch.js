var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,100,70,50);
  fixedRect = createSprite(200,100,50,70);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  console.log(movingRect.x - fixedRect.x);

 
  if( isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "lime";
    fixedRect.shapeColor = "lime";

  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }

  drawSprites();

}


