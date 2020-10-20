
var wall,bullet;
var speed,thickness,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1250,200,thickness,width/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,20,20);
  bullet.velocityX=speed;
  bullet.shapeColor=color(0,0,0);
}

function draw() {
  background("grey");  
 
  if(hascollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){

wall.shapeColor=color(225,0,0);

}

if(damage<10){

wall.shapeColor=color(0,225,0);

}

  }
 
  drawSprites();
}

function hascollided(lbullet,lwall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true;

}
return false;
}

