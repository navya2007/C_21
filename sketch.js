var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  // fixedRect.debug=true;
  // movingRect.debug=true;

  gameObject1=createSprite(100,100,50,50)
  gameObject1.shapeColor="green";

  gameObject2=createSprite(300,100,50,50)
  gameObject2.shapeColor="green";

  gameObject3=createSprite(500,100,50,50)
  gameObject3.shapeColor="green";

  gameObject4=createSprite(700,100,50,50)
  gameObject4.shapeColor="green";
}
function draw() {
  background("black");

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,gameObject1)===true){
    movingRect.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
  
 drawSprites();
}
