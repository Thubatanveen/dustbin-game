const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,groundObj,leftSide,rightSide,dustbin;
var world;
var radius = 70;

function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var paper_options={
		isStatic:true,
		restitution:0.3,
		density:0.4
	}

	paper = Bodies.circle(260,100,radius/2.6,paper_options);
	World.add(world,paper);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	paperMode(CENTER);
 paper(paper.position.x,paper.position.y,radius,radius);


	
	dustbinimage(1185, 570, 200,200);
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper,paper.position,{x:85,y:-85});
    
  	}
}
