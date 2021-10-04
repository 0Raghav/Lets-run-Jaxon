var boy,boyimg,path,pathimg,boundry1,boundry2;
function preload(){

  //pre-load images
  boyimg=loadAnimation("runner-1.png","runner-2.png");
pathimg=loadImage("path.png");
}

function setup(){
  createCanvas(600,600);
  //create sprites here
  path=createSprite(300,300);
  path.addImage(pathimg);
  path.velocityY=6;

  boy=createSprite(300,500);
  boy.addAnimation("running",boyimg);
  boy.scale=0.1

  boundry1=createSprite(10,300,20,600);
  boundry1.visible=false
  boundry2=createSprite(585,300,20,600)
  boundry2.visible=false
}

function draw() {
  background(0);
  if(path.y>500){
    path.y=300;
  }
  boy.x=mouseX
  boy.collide(boundry1)
  boy.collide(boundry2)
drawSprites();
}
