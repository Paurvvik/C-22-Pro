class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spt=createCanvas(this.x, this.y, 50,50);
        this.spt.shapeColor="orange";
    }

move(xdir,ydir){
    this.spt.x += xdir*grid;
    this.spt.y += ydir*grid;
}
}