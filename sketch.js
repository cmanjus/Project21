var bullet,wall;
var weight,speed;
var damage;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 30, 10);
  bullet.shapeColor = 'white';
  bullet.weight = random(30,52);
  bullet.speed = random(223,321);


  wall = createSprite(1500,200,60,400);
  wall.shapeColor=color(80,80,80);
  wall.thickness = random(22,83);
  wall.width = wall.thickness;

  


}

function draw() {
  background('grey');  
  fill('black');
  textSize(30);
  text("Effectiveness of walls against bullets",200,100);
  
  

  damage = (0.5 * bullet.weight * bullet.speed * bullet.speed)/(wall.thickness*wall.thickness*wall.thickness);
 // console.log(damage);
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    text(Math.round(damage),250,350);
    if(damage<=10)
    {
      wall.shapeColor = color(0,255,0);
    }
   
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }
    
}
else{
  bullet.velocityX=bullet.speed/10;
  bullet.collide(wall);
}
  text("Damage: ",100,350);
  drawSprites();
}