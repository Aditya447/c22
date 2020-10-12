const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

 var engine,world;
var ground,ball;

function setup() {

  var canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ball_options=
{
  restitution:1.2
}

ball=Bodies.circle(200,100,30,ball_options);
World.add(world,ball);
var ground_option={
isStatic:true
}

ground=Bodies.rectangle(200,380,390,50,ground_option);
World.add(world,ground);

console.log(ground.position.x);
console.log(ground.position.y);
  
}



function draw() {
  background("yellow"); 
  Engine.update(engine); 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  fill("purple");
  ellipse(ball.position.x,ball.position.y,20,20);
  fill("brown");
  rect(ground.position.x,ground.position.y,390,50); 
  drawSprites();
} 