class Dustbin {
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.bottombody = Bodies.rectangle(this.x,this.y,200,20,{isStatic: true});
      this.leftbody = Bodies.rectangle(1200,500,20,200,{isStatic: true});
      this.rightbody = Bodies.rectangle(1200,500,20,200,{isStatic: true});
      World.add (world, this.bottombody);
      World.add (world, this.leftbody);
      World.add (world, this.rightbody);

    }
    display(){
      fill(255);
      rect(this.bottombody.position.x,this.bottombody.position.y,200,20);
      rect(1200,400,20,200);
      rect(1200,600,20,200);
      
    }
  }