class Speaker{
    public name: string;
public color: string;
public volume: number;

public constructor(name:string,color:string,volume:number){
    this.name = name
    this.color = color;
    this.volume = volume;
}
// switchOn switchOff soundOn 
switchOn() :void{
    console.log(this.name+" is on")
}
switchOff() :void{
    console.log(this.name+" is off")
}
soundOn() :void{
    console.log(this.name+" is makeing sound now")
}
display():void{
    console.log("color: ", this.color)
    console.log("volume: ", this.volume)
}
}
let bose = new Speaker("bose","Yellow",2000 );
bose.display();
bose.switchOn();
bose.soundOn();
bose.switchOff();
let philips = new Speaker("philips","red",2000 );
philips.display();
philips.switchOn();
philips.soundOn();
philips.switchOff();