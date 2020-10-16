
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime;
var ground,groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  
  
}



function setup() {
 
  
    monkey= createSprite(80,315,20,20);
    monkey.addAnimation("moving", monkey_running);
    monkey.scale = 0.1;
  
  
   ground = createSprite(400,350,900,20);
   ground.x = ground.width /2;
   ground.velocityX = -10;
  
  bananaGroup = new Group(); 
  obstaclesGroup = new Group();
}


function draw() {
  background("skyBlue");
  
  
  
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")) {
        monkey.velocityY = -12;

    }
  
  monkey.velocityY = monkey.velocityY +0.8; 
  
   stroke("black");
   textSize = 20;
   fill("white")
  
  
   stroke("black");
   textSize = 20;
   fill("black")
   survivalTime = Math.ceil(frameCount/frameRate() );
  text("SurvivalTime: "+ survivalTime, 100,50);
  
   monkey.collide(ground);
   
  
  obstacles () ;
  food () ;
 drawSprites (); 
}

function food () {
  
   
  if (World.frameCount % 80 == 0) {
     banana= createSprite(400,200,20,20);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
  
    banana.y = Math.round(random(120,200));
    
    banana.velocityX = -5;
    banana.setLifetime = 100;
    
    bananaGroup.add(banana);
  }       
}

function obstacles () {
  if (frameCount % 300 === 0){
   var obstacle = createSprite(370,305,10,40);
   obstacle.addImage( obstaceImage);
   obstacle.velocityX = -5;
   

   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.19;
    obstacle.lifetime = 150;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
  
}


