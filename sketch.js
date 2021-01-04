const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block11,block12,block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block22,block23,block24,block25,block26;
var ground1,ground2;
var bird, sli;
var poly,imgs;

function preload(){
imgs=loadImage("polygon.png")

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(420,300,180,10);
    ground2 = new Ground(810,250,250,10);
   poly=Bodies.circle(100,200,40,40);

  World.add(world,poly)

// First Pyramid.
 //level one 
 block1 = new Block3(360,275,30,40); 
 block2 = new Block3(390,275,30,40); 
 block3 = new Block3(420,275,30,40); 
 block4 = new Block3(450,275,30,40);
 block5 = new Block3(480,275,30,40); 
 //level two 
 block6 = new Block2(390,235,30,40); 
 block7 = new Block2(420,235,30,40);
 block8 = new Block2(450,235,30,40);
 //top 
 block9 = new Block(420,195,30,40); 

// Second Pyramid.
// level one
 block11 = new Block3(720,225,30,40); 
 block12 = new Block3(750,225,30,40); 
 block13 = new Block3(780,225,30,40); 
 block14 = new Block3(810,225,30,40);
 block15 = new Block3(840,225,30,40); 
 block16 = new Block3(870,225,30,40);
 block17 = new Block3(900,225,30,40);
 //level two 
 block18 = new Block2(750,185,30,40); 
 block19 = new Block2(780,185,30,40); 
 block20 = new Block2(810,185,30,40); 
 block21 = new Block2(840,185,30,40);
 block22 = new Block2(870,185,30,40);
 //level three
 block23 = new Block(780,145,30,40); 
 block24 = new Block(810,145,30,40);
 block25 = new Block(840,145,30,40);
 //top 
 block26 = new Block(810,105,30,40); 


 
   sli = new Slingshot(poly.body,{x:200, y:50});
}

function draw(){
    background("black");
    //Engine.update(engine);
    // First Pyramid.
   block1.display()
   block2.display()
   block3.display()
   block4.display()
   block5.display()
   block6.display()
   block7.display()
   block8.display()
   block9.display()
// Second Pyramid.
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()
block26.display()
// Stands
ground1.display()
ground2.display()
    
ellipseMode(RADIUS)
//pse(poly.position.x,poly.position.y,20)
imageMode(CENTER)
image(imgs,poly.position.x,poly.position.y,40,40)
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

