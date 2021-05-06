//Create variables here
var dog;
var happyDog;
var food;
var foodStock;

function preload() {
  dog1 = loadImage("images/dogImg.png");
  happyDog1 = loadImage("images/dogImg1.png")

}


function setup() {
  createCanvas(800, 700);
  database = firebase.database();

   dog = createSprite(400, 250, 10, 20);
  var happyDog = createSprite(400, 250, 10, 20);
  dog.addImage  ("dog",dog1);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    console.log (food)
    writestock(food);
    dog.addImage("dogHappy",happyDog1);
  }




  drawSprites();

  textSize(25)
  fill("orange")
  text("Press UP_ARROW key to feed Drago milk", 100, 50);
}

function readStock(data) {
  food = data.val();
}

function writestock(x) {
  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }
  console.log   (x)
  database.ref('/').update({
    Food: x
  })
}



