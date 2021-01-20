var frank;
var fireGround;
var fixedplatform
var platform, platformGroup;
var platformTop, platformTopGroup;
var bulletCount = 10;
function setup() {
  
  createCanvas(800,600);
  frank = createSprite(100,100,20,20);
  frank.shapeColor = "blue";
  
  fixedplatform=createSprite(100,150,80,20);
  fixedplatform.lifetime = 500;
  fireGround = createSprite(400,580,800,20);
  fireGround.shapeColor = "orange";

  platformGroup = new Group();
  platformTopGroup =  new Group();

}

function draw() {
  background("green");
  textSize(20)
  fill("black"); 
  text("Bullets : "+bulletCount, 700,100) ;
  if (keyWentDown("a")){
    frank.velocityX=-5;
    
  }
  if(keyWentUp("a")){
    frank.velocityX=0;
  }

  if (keyWentDown("d")){
    frank.velocityX=5;
    
  }
  if(keyWentUp("d")){
    frank.velocityX=0;
  }
  
if (keyDown("e")){
  if(bulletCount>0){
    spawnBullets();
    bulletCount -= 1;
  }
  
  }
  frank.velocityY = frank.velocityY +0.5;

  if(frank.isTouching(fireGround)){
    //game over 
    frank.collide(fireGround);
  }

  if(frank.isTouching(platformTopGroup) || frank.isTouching(fixedplatform)){
    frank.velocityY = 0;
    if(frank.isTouching(platformTopGroup)){
      frank.velocityX = -1.5;
    }
    

    if (keyWentDown("space")){
      frank.velocityY=-15;
      
    }
  }


  spawnPlatform();
  drawSprites();
}

function spawnBullets(){
  bullet = createSprite(100,100,10,5);
  bullet.x = frank.x;
  bullet.y = frank.y;
  bullet.velocityX =3;
  bullet.lifetime = 60;

  

}

function spawnPlatform(){
  
  var num = round(random(90,100))
  if(frameCount % num== 0){
    
      platform = createSprite(800,random(200,400),random(50,100),10);
      platform.velocityX =-1.5;
      platformGroup.add(platform);


      platformTop = createSprite(800,platform.y-5 , platform.width, 2);
      platformTop.velocityX = -1.5;
      platformTop.debug = true;
      platformTopGroup.add(platformTop);
  
  
    
  }
  

}