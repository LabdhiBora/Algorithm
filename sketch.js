var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,100,40,40);
  fixedRect.shapeColor="red";

  movingRect=createSprite(300,250,50,50);
  movingRect.shapeColor="pink";
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
     && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="pink";
  }
  
  drawSprites();
}