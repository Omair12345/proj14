var bow , arrow,  background;
var bowImage, arrowImage, greenImage, red_balloonImage, pinkImage ,blueImage, backgroundImage;
var score=0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  greenImage = loadImage("green_balloon0.png")
  pinkImage = loadImage("pink_balloon0.png")
  blueImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
   
  redB = new Group()
  greenB = new Group()
  pinkB = new Group()
  blueB = new Group()
  aGroup = new Group()
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
  


   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if (select_balloon == 2) {
      pinkBalloon();
    }
    if (select_balloon == 3) {
      greenBalloon();
    }
    if (select_balloon == 4) {
      blueBalloon();
    }

  }
  
  if(aGroup.isTouching(redB)){
  aGroup.destroyEach()
  redB.destroyEach()
  score+score+1
  }
  if(aGroup.isTouching(greenB)){
    aGroup.destroyEach()
    greenB.destroyEach()
    score=score+2
    } 
    if(aGroup.isTouching(pinkB)){
      aGroup.destroyEach()
      pinkB.destroyEach()
      score=score+3
      }
      if(aGroup.isTouching(blueB)){
        aGroup.destroyEach()
        blueB.destroyEach()
        score=score+4
        }







  drawSprites();
  text(" score " + score,300,50 )
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  aGroup.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red)
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloon
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green)
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.5;
  pinkB.add(pink)
}
