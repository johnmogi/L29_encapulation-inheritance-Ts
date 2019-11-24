
interface Drawable{
    DrawOnScreen() : void;
    DrawOnPrinter() :void;

}
abstract class Shape{
    public xPosition:number
    public yPosition:number
    public color:string
    public constructor(xPosition:number,yPosition:number,color:string){
    this.xPosition=xPosition;
    this.yPosition=yPosition;
    this.color=color;
    }
public abstract display():void;
}

class Circle extends Shape{ 
    public radius:number;
    public constructor(xPosition:number,yPosition:number,color:string, radius:number){
super(xPosition,yPosition,color)
this.radius=radius;
    }

    // getarea(height,width){
        getarea(rad:number){
          
            // var radius = +prompt("enter a ball size, we'll give you the volume");
        //    let radius = Math.abs(rad);
            // let volume = (4/3) * rad 
            let volume = (rad* rad) * Math.PI

            // * Math.pow(radius, 3) * Math.PI 
            // volume = volume.toFixed(4);
        // let radius = height*width;
        console.log(volume)
         return volume;
    }

display():void{
    console.log("x Position: ", this.xPosition)
    console.log("y Position: ", this.yPosition)
    console.log("color: ", this.color)
    console.log("the ball radius is :  ", this.radius)

    // console.log("radius: ", this.radius)

}

}


class Rectangle extends Shape implements Drawable{ 
    public height: number;
    public width: number;

    public constructor(xPosition:number,yPosition:number,color:string,height:number,width:number){
super(xPosition,yPosition,color)
this.height = height;
this.width = width;
    }
    public getarea(a:number,b:number){
        this.height + this.width
        console.log("the rect area is : ", (a+b))
        return (a+b)
    }
   public display(): void{
    console.log("x Position: ", this.xPosition)
    console.log("y Position: ", this.yPosition)
    console.log("color: ", this.color)
    console.log("height: ", this.height)
    console.log("width: ", this.width)
 
   }
   public DrawOnScreen(): void{
console.log("displaying Rectangle on screen")
   }
      public drawOnPrinter(): void{
        console.log("displaying Rectangle on printer")
  
   } 
}
// ? ----------Last Part-------------

class Sphere extends Circle{
    public roundArea: number;  
    public constructor(xPosition:number,yPosition:number,color:string, radius:number, roundArea: number){
super(xPosition,yPosition,"blue",250)
this.roundArea=roundArea;    
    }
    display(): void{
        super.display();
        console.log("the overall area of the Sphere is : ", this.roundArea )
    }
    public calculate() : void{
        const base = (this.radius*4) 
        const pieCalc = (base*3.14)/3 
    console.log("the Sphere Volume is: " + pieCalc)
    // return volume = pieCalc
    
}
}


let roundy = new Circle(50,50,"blue", 50);
roundy.getarea(50)
roundy.display();

let squary = new Rectangle(10,20,"red",500,450);
squary.getarea(10,20)
squary.display();
squary.drawOnPrinter();
squary.DrawOnScreen();

let spherical = new Sphere(250,250,"green", 450,500)
spherical.display();
spherical.calculate();