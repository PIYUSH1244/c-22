const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var Ball;  
function setup()
 {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option ={
    isStatic : true
  }
 ground = Bodies.rectangle(200,350,400,50,option);
 World.add(world,ground);

 var balloption={
   restitution:1.0
 }
ball=Bodies.circle(200,100,20,balloption)
World.add(world,ball);
}

function draw() {
  background("lightgreen");  
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}