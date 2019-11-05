//Variables
var time = 0;
var start = 1;
var timer = 0;
var timer2 = 0;
//Sprites
var road = createSprite(205, 200);
road.setAnimation("road");
road.width = 1000;
road.height = 1000;
road.scale = 0.5;
var car = createSprite(200, 300);
car.setAnimation("car");
car.scale = 0.5;
var car2 = createSprite(100, 200);
car2.setAnimation("car2");
car2.scale = 0.5;
var car3 = createSprite(325, 350);
car3.setAnimation("car3");
car3.scale = 0.5;
var car4 = createSprite(50, 30);
car4.setAnimation("car4");
car4.scale = 0.5;
var car5 = createSprite(350, 85);
car5.setAnimation("car5");
car5.scale = 0.5;
var car6 = createSprite(100, 10);
car6.setAnimation("car6");
car6.scale = 0.5;
var sprite = createSprite(200, 200);
sprite.setAnimation("screen2");
sprite.scale = 1;
//Functions
function draw() {
  //Controls
  if (keyIsDown("right")) {
    car.x = car.x + 12;
  }
  if (keyIsDown("left")) {
    car.x = car.x + -12;
  }
  // Dying
  if (car.isTouching(car2)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("screen");
  }
  if (car.isTouching(car3)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("screen");
  }
  if (car.isTouching(car4)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("screen");
  }
  if (car.isTouching(car5)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("screen");
  }
  if (car.isTouching(car6)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("screen");
  }
  //So No cars spawn on top of each other
  if (car2.isTouching(car3)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car2.isTouching(car4)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car2.isTouching(car5)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car2.isTouching(car6)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car3.isTouching(car4)) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car3.isTouching(car5)) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car3.isTouching(car6)) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car4.isTouching(car5)) {
    car4.y = randomNumber(0, 0);
    car4.x = randomNumber(400, 0);
  }
  if (car4.isTouching(car6)) {
    car4.y = randomNumber(0, 0);
    car4.x = randomNumber(400, 0);
  }
  if (car5.isTouching(car6)) {
    car5.y = randomNumber(0, 0);
    car5.x = randomNumber(400, 0);
  }
  //Car Loops
  if (car2.y > 405) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car3.y > 405) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car4.y > 405) {
    car4.y = randomNumber(0, 0);
    car4.x = randomNumber(400, 0);
  }
  if (car5.y > 405) {
    car5.y = randomNumber(0, 0);
    car5.x = randomNumber(400, 0);
  }
  if (car6.y > 405) {
    car6.y = randomNumber(0, 0);
    car6.x = randomNumber(400, 0);
  }
  //So you can go off screen and appear on the other side
  if (car.x > 405) {
    car.x = 0;
  }
  if (car.x < -5) {
    car.x = 400;
  }
  //Winning
  if (timer > 44) {
    var screen3 = createSprite(200, 200);
    screen3.setAnimation("screen3");
    screen3.scale = 1;
  }
  drawSprites();
  //This is the timer
  if (keyDown("space")) {
    timer2 = World.seconds;
    start = 2;
  }
  if (start == 2) {
    timer = World.seconds - timer2;
    car2.velocityY = 10;
    car3.velocityY = 10;
    car4.velocityY = 10;
    car5.velocityY = 10;
    car6.velocityY = 10;
    sprite.visible = false;
    //Text
    fill("white");
    textSize(20);
    text("Time:",10, 10, 80, 20);
    text(timer, 75, 30);
    textFont("Courier New");
  }
}
