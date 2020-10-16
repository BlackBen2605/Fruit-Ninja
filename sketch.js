var PLAY = 1;
var END = 0;
var gameState = 1;


var sword,swordImage
var enemyGroup, monsterImage
var gameOverImg
var fruitGroup, fruit1, fruit2, fruit3, fruit4
var gameOverSound, ChopSound
var score;    
function preload(){
  
  swordImg = loadImage("sword.png");
  
  fruit1= loadImage("fruit1.png");
  fruit2= loadImage("fruit2.png");
  fruit3= loadImage("fruit3.png");
  fruit4= loadImage("fruit4.png");
  
  gameOverImg = loadImage("gameover.png")
  monsterImage = loadAnimation("alien1.png","alien2.png")
  
  gameOverSound = loadSound("gameover.mp3")
  ChopSound = loadSound("knifeSwooshSound.mp3")
}
function setup(){
  createCanvas(500, 500);
  
  sword= createSprite(40,200,20,20)
  sword.addImage(swordImg)
  sword.scale=0.7;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  gameOver = createSprite(250,200);
  gameOver.addImage(gameOverImg);
  score=0;
}
function draw(){
  
  background(180);
  textSize(30)
  text("Score: "+ score, 200,50);
  
  if(gameState === PLAY){
  fruits();
  Enemy();
  sword.x = World.mouseX
  sword.y = World.mouseY
  gameOver.visible=false
  }
  if(sword.isTouching(fruitGroup)){
  ChopSound.play();
  fruitGroup.destroyEach();
    score=score+2
  }
  if(enemyGroup.isTouching(sword)){
    gameOverSound.play();
    gameState=END
  }
  if(gameState===END){
    gameOver.visible=true;
    fruitGroup.destroyEach(0);
    enemyGroup.destroyEach(0);
    sword.x=sword.x+0
    sword.y=sword.y+0
    sword.x=250
    sword.y=300
  }
 
  score.depth=sword.depth
  sword.depth=sword.depth+1
  
        
      
  
      
 drawSprites();
}
function fruits(){
  if(World.frameCount%80===0){
  fruit = createSprite(400,200,20,20);
  fruit.scale=0.2
  r=Math.round(random(1,4))
  if(r==1){
    fruit.addImage(fruit1);}
  if(r==2){
    fruit.addImage(fruit2);}
  if(r==3){
    fruit.addImage(fruit3);}
  if(r==4){
    fruit.addImage(fruit4)}
    
  
  fruit.y=Math.round(random(50,340));
  fruit.setLifetime=100
  fruitGroup.add(fruit);
    
     position = Math.round(random(1,2))
    if(position==1){r
    fruit.x=499
    fruit.velocityX=-(7+(score/4));}
  else{
  if(position==2){
    fruit.x=0
    fruit.velocityX=(7+(score/4))}
    
    
  }
}}

function Enemy(){
  if(World.frameCount%200===0){
   monster=createSprite(400,200,20,20)
   monster.addAnimation("moving",monsterImage)
   monster.y=Math.round(random(100,300))
   monster.setLifetime=50
    
   enemyGroup.add(monster)
    
  a = Math.round(random(1,2))
    if(a==1){
      monster.x=499
      monster.velocityX=-(7+(score/10))}
      else{
        if(a==2){
          monster.x=0
          monster.velocityX=(7+(score/10))}}
  }}
      
    
  
