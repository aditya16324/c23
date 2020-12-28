class Aatma{

    constructor(p,q,l,m)
    {

        this.aatma=Bodies.rectangle(p,q,l,m);
        World.add(world,this.aatma);
        this.width=l
        this.height=m
    }
display(){

    rect(this.aatma.position.x,this.aatma.position.y,this.width,this.hight)
}

}