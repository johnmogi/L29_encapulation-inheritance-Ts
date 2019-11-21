class Chair{
  
    public name: string;
    public material: string;
public color: string;
public length:number;
public width: number;
public height: number;


public constructor(name:string,material:string,color:string,length:number,width:number, height:number){
    this.name = name;
    this.material=material;
    this.color = color;
    this.length= length;
    this.width = width;
    this.height= height;
}
// switchOn switchOff soundOn 
voluemCalculate() :void{
   let chairVolume = this.length * this.height * this.width
   console.log(this.name+"length: "+ chairVolume)
}

display():void{
    console.log(this.name+"material: ", this.material)
    console.log(this.name+"color: ", this.color)
    console.log(this.name+"length: ", this.length)
    console.log(this.name+"width: ", this.width)

    console.log(this.name+"height: ", this.height)
   this.voluemCalculate()

}
}
  // name material color length  width height
let soffa = new Chair("The Soffa","Leather","Yellow",45, 200,55 );
soffa.display();

let rockArm = new Chair("Rocking Armchair","cotton","blue",500, 10,45 );
rockArm.display();
