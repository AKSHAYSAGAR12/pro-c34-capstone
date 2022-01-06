
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var spider_img;
var iron_img;
var background_img;
var ground;
var button,button1;
var rope, rope2;
var fruit_con;
var fruit_con_2;
var fruit;
var fr;

function preload()
{
spider_img = loadImage('spider.png');
iron_img = loadImage('iron.jpg');
background_img = loadImage('background.webp');
ground_img = loadImage('ground.png');
}

function setup() {
  createCanvas(700,800);

  engine = Engine.create();
  world = engine.world;

  ultron_img = loadImage('ultron.jpg');
  
  spiderman = createImg('spider.png');
  spiderman.position(300,660);
  spiderman.size(100,100);

  ironman = createImg('iron.jpg');
  ironman.position(300,100);
  ironman.size(100,100);
 
  button = createImg('button.jpg');
  button.position(620,420)
  button.size(80,80);

  blower = createImg('airblow2.jpg');
  blower.position(540,720);
  blower.size(50,50);
  blower.mouseClicked(airblow);


  blower2 = createImg('airblow.jpg');
  blower2.position(540,50);
  blower2.size(50,50);
  blower2.mouseClicked(airblow2);

  rope = new Rope(5,{x:620,y:420});
  rope2 = new Rope(5,{x:80,y:420});

  button1 = createImg('button.jpg');
  button1.position(2,420);
  button1.size(80,80);


  fruit = Bodies.circle(350,420,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit_con_2 = new Link(rope2,fruit);

 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() 
{
  background(51);
  image(background_img,0,0,width,height);
  push();
  imageMode(CENTER);
  if(fruit!=null)
  {
    image(ultron_img,fruit.position.x,fruit.position.y,70,70);

  }
  pop();

  Engine.update(engine);
  drawSprites();
  rope.show();
  rope2.show();

}

function airblow()
{
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:-0.03});
}

function airblow2()
{
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:0.03});
}