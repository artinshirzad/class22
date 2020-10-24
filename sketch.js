const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
var groundp={
  isStatic:true
}
 ground=Bodies.rectangle(200, 390, 200, 20,groundp);
 World.add(world,ground);
 
 var ballp={
  restitution:1.0
}
 ball=Bodies.circle(200, 100, 20,ballp);
 World.add(world,ball);
 //console.log(object.type);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  //drawSprites();
}