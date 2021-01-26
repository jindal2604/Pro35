var balloon;

function preload() {
  bg = loadImage('Hot Air Ballon-01.png');
  balloonImage = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1365,650);
  balloon = createSprite(100, 400, 20, 20);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;
}

function draw() {
  background(bg);
  
  if(keyDown("a")){
    balloon.x = balloon.x - 10;
  }
  
  if(keyDown("d") && keyDown("ctrl")){
    balloon.x = balloon.x + 15;
  }

  if(keyDown("a") && keyDown("ctrl")){
    balloon.x = balloon.x - 15;
  }

  if(keyDown("d")){
    balloon.x = balloon.x + 10;
  }

  if(keyDown("w")){
    balloon.y = balloon.y - 10;
  }

  if(keyDown("s")){
    balloon.y = balloon.y + 10;
  }


  textSize(20);
  fill("blue");
  text("Use W  arrow key to move the Hot Air Balloon up.",50,50);
  text("Use S  arrow key to move the Hot Air Balloon down.",50,75);
  text("Use D  arrow key to move the Hot Air Balloon right.",50,95);
  text("Use A  arrow key to move the Hot Air Balloon left.",50,115);
  text("Use CTRL + A arrow key to increase the speed.",50,135);
  text("Use CTRL + D arrow key to increase the speed.",50,155);



  drawSprites();
}