var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(100,540,20,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale= 0.1;
  
  ground = createSprite(400,570,1200,10);
  ground.velocityX = -4;
  ground.width = ground.width/2;
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  

}


function draw() {
  background(255);
  
  drawSprites();
  
  spawnFood();
  spawnObstacles();
  
}

function spawnFood() {
  
  if (frameCount%80 === 0){
    
  banana = createSprite(300,450,20,50);
  banana.y = Math.round(random(400,450));
  banana.addImage("banana",bananaImage);
  banana.scale= 0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
  FoodGroup.add(banana)
    
  }


}

function spawnObstacles () {

if (frameCount%300===0) {
  
    obstacle = createSprite(200,540,20,50);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
  
  }
    
}

  
