var backgroundImage, balloon, balloonSprite;

function preload(){
backgroundImage = loadImage("Hot Air Ballon-01.png");
balloon = loadImage("Hot Air Ballon-02.png");
}

function setup() {
  createCanvas(600,600);
  balloonSprite = createSprite(400, 200, 50, 50);
  balloonSprite.addImage("balloon", balloon);
}

function draw() {
  background(backgroundImage);  

  if (keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }

  drawSprites();
}