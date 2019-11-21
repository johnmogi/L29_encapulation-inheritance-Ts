class Flashlight{
    public name: string;
public color: string;
public length:number;
public volume: number;
public batteries: number;


public constructor(name:string,color:string,length:number,volume:number, batteries:number){
    this.name = name
    this.color = color;
    this.length= length;
    this.volume = volume;
    this.batteries= batteries;
}
// switchOn switchOff soundOn 
switchOn() :void{
    console.log(this.name+" is on")
}
switchOff() :void{
    console.log(this.name+" is off")
}
replaceBatteries() :void{
    console.log(this.name+" batteries are being replaced")
}
display():void{
    console.log(this.name+"color: ", this.color)

    console.log(this.name+"light intensity is:  ", this.length)

    console.log(this.name+"volume: ", this.volume)

}
}
let flight1 = new Flashlight("miniLight","Yellow",45, 200,55 );
flight1.display();
flight1.switchOn();
flight1.switchOff();
flight1.replaceBatteries();
let flight2 = new Flashlight("Big Boomba","Silver",5000, 45000,800 );
flight2.display();
flight2.switchOn();
flight2.switchOff();
flight2.replaceBatteries();
