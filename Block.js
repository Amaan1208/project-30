class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png");
      this.Visiblity = 255;
      World.add(world, this.body);
     
  
    }
    display(){

      
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

      if(this.body.speed < 3){
        this.body.display();
        //maam i need help in this one line, im not able to recall what we should write here to display the block object 
        //besides this everything else is done and completed
       }
       else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, pos.x, pos.y, 30, 40);
        pop();
      }
    }
}