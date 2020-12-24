const Engine=Matter.Engine;// physics rules// NAMESPACING for library file as matter.js
const World=Matter.World;// add the objects
const Bodies=Matter.Bodies;// objects

var engine,world;// create our own physcs engine


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 
  var ball_options = {
    restitution:2.0
  }
  
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);



  var ground_options={
    isStatic:true
  }


ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);    // add it to the world of physics engine to accept those properties


console.log(ground);
console.log(ground.position.x);
console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 50);

  ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 20, 20)


}