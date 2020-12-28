const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var aatma1,aatma2


function setup(){
createCanvas(1200,600)
engine=Engine.create()
world=engine.world
aatma1=new Aatma(200,200,100,100)
aatma2=new Aatma(400,400,100,100)
aatma3=new Aatma(900,100,100,100)
aatma4=new Aatma(600,300,100,100)
}
function draw(){
background("lightblue")
Engine.update(engine)
aatma1.display()
aatma2.display()
aatma3.display()
aatma4.display()
}