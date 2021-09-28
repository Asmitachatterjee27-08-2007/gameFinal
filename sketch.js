var ground;
var player, villain;
var rand, bg, bgImg, bgImg2,cactusImg1, cactusImg2, cactusImg3, playerImg,coinImg, nextImg;
var time,lives = 3,score = 0;
var coinGroup,obstacleGroup;
var startButton,nextButton;

var gameState = "start";

function preload() {
  villainImg = loadAnimation("images/boy/boy1.png","images/boy/boy2.png","images/boy/boy3.png","images/boy/boy4.png","images/boy/boy5.png");
  cactusImg1 = loadImage("images/cactus1.png");
  cactusImg2 = loadImage("images/cactus2.png");
  cactusImg3 = loadImage("images/cactus3.png");
  bgImg = loadImage("images/bg2.jpg");
  bgImg2 = loadImage("images/Australian_Grasslands.jpg");
  coinImg=loadImage("images/coin.png");
  nextImg=loadImage("images/nextButton.png");
  playerImg = loadAnimation("images/cuteGirl2/tile000.png", "images/cuteGirl2/tile001.png", "images/cuteGirl2/tile002 .png", "images/cuteGirl2/tile003.png", "images/cuteGirl2/tile004.png", "images/cuteGirl2/tile005.png", "images/cuteGirl2/tile006.png", "images/cuteGirl2/tile007.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  startButton= createButton("startButton");
  startButton.position(windowWidth/2,windowHeight/2);
  startButton.mousePressed(() => {
    createInitialGameObjects();
  });
}

function draw() {
  background("skyblue");
  drawSprites();
  if(gameState==="start"){
    start()
  }
  if (gameState === "play") {
    play();
    textSize(40);
    stroke("orange");
    fill("orange");
    text("SCORE:"+score,100,100);

  }
  if (gameState === "level1") {
    level1()
  }
  if(gameState=="end"){
    stroke("blue");
    fill("blue");
    text("YOU WON",200,200);
    ground.velocityX=0;
    
  }
}
