const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground1= new Ground(0,390,800,10);
  
  
    rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background("pink");
  Engine.update(engine);
  ground1.show();
}

