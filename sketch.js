var backGround,bgImg;
var shooter, shooterImg,shooterShooting1,shooterDeadImg;
var zombie;


function preload(){
bgImg=loadImage("assets/bg.jpeg");
shooterImg=loadImage("assets/shooter_2.png");
shooterShooting1=loadImage("assets/shooter_3.png");
shooterDeadImg=loadImage("assets/shooter_1.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

backGround=createSprite(windowWidth/2,windowHeight/2+130,20,20);
backGround.addImage("backGround",bgImg);

shooter=createSprite(windowWidth/2-300,windowHeight/2+150);
shooter.addImage("shooter",shooterImg);
shooter.scale=0.6;

}

function draw(){

if(keyDown(UP_ARROW)){
shooter.y=shooter.y-10;
}

if(keyDown(DOWN_ARROW)){
  shooter.y=shooter.y+10;
  }

if(keyDown(LEFT_ARROW)){
   shooter.changeImage(shooterShooting1);
  }

drawSprites();

}