var foodStock
class Food{
    constructor(){
this.image=loadImage("./Milk.png")

    }
    display(){
        var x=80
        var y=100
        imageMode(CENTER)
        image(this.image,720,220,70,70)
    }
}