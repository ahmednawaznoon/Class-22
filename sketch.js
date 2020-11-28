const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies

var engine, world, object

function setup() {
  createCanvas(600,600);
  engine = Engine.create()
  world = engine.world
  var options = {
    isStatic: true
  }

  
  object = Bodies.rectangle(300,480,600,20, options)
  World.add(world,object)
  console.log(object.position.x)

  ball = Bodies.circle(300,100,20,{ restitution: 2})
  World.add(world,ball)
  
}


function draw() {
  background(0); 
  Engine.update(engine) 

  rectMode(CENTER)
  rect(object.position.x, object.position.y, 400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20)
  
}