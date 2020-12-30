
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	Engine.run(engine);
	ball = new ball(100,100);
	
	dustbin1 = new Box(700,320,70,70);

	
  }
  
 


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 ball.display();
 dustbin.display();
}



