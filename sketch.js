
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  score=0;
}

function draw() {
  createCanvas(600,600);
  background("white");
  
  if (ground.x < 0){
  ground.x=ground.width/2;  
  }
  
  if  (keyDown("space")){
    monkey.velocityY=-12;
  }
  
  if(keyDown("right")){
    monkey.velocityX=1;
  }  
  
 monkey.velocityY=monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  food();
  spawnobstacle();
  
  drawSprites();
  
  text("white");
  textSize(20);
  fill("white");
  text("score: "+score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time: "+ survivalTime,100,50);
  text("This is the player",40,290);
}

function food(){
  if (frameCount%80 === 0){
    banana = createSprite(570,100,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.setlifetime=500;
    banana.velocityX=-3;
  }
}

function spawnobstacle(){
  if (frameCount%300 === 0){
    obstacle = createSprite(400,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.setlifetime=500;
    obstacle.velocityX=-3
    obstacle.scale=0.1
  }
}


