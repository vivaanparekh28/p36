var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feed=createButton("Feed the dog")
  feed.position(700,200)

  add=createButton("Add food")
  add.position(800,200)
  food=new Food()
}

function draw() {
  background(100,179,17);
  food.display()
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
