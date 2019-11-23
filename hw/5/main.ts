abstract class Shape{
    public xPosition:number
    public yPosition:number
    public color:string 
    public constructor(xPosition:number,yPosition:number,color:string ){
        this.xPosition=xPosition;
        this.yPosition= yPosition;
        this.color=color;
    }
    display(): void{
console.log("xPosition: ",this.xPosition)
console.log("yPosition: ",this.yPosition)
console.log("color: ",this.color)
    }
    abstract getarea();
}

class Circle extends Shape{
public radius:number;
    public constructor(xPosition:number,yPosition:number,color:string,radius:number; ){
super(xPosition,yPosition,color)
this.radius=radius
    }
   getarea(radius){
    radius = Math.abs(radius);
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    return volume
    }
    display(){
       super.display();
       console.log("radius: ",this.radius)  
    }
}

let roundy = new Circle(50,50,"red",35)
roundy.getarea(35)
roundy.display()