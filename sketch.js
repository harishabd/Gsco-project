
var car1,car2,car3, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

speed=random(22, 55);
weight=random(400,1500)

 car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall=createSprite(1000,200,60,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background("darkblue");  

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car,car,car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
   { 
    car.shapeColor=color(0,255,0);
  }

  if(deformation<180 && deformation>100)
  { 
  car.shapeColor=color(230,230,0); 
}
  
if(deformation<100);
  {
    car.shapeColor=color(255,0,0);
  }
}

  drawSprites();
}