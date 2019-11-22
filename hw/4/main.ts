class Person{
  
    public firstName: string;
    public lastName: string;

public constructor(firstName:string,lastName:string){
    this.firstName=firstName;
    this.lastName=lastName;
}



display():void{
    console.log("first Name: ", this.firstName)
    console.log("last Name: ", this.lastName)
}
}

class Employee extends Person{
public address: string;
public salary: number;
    public constructor(firstName:string,lastName:string, address: string,salary:number){
super(firstName,lastName);
this.address=address;
this.salary=salary;
    }
    display(): void{
super.display();
console.log("address: ", this.address)
console.log("salary: ", this.salary)
    }
}

class Manager extends Employee{
public veteran:string;
public YearBonus:string;
public constructor(firstName:string,lastName:string, address: string,salary:number, veteran:string, YearBonus:string){
    super(firstName,lastName, address,salary);
    this.veteran=veteran;
    this.YearBonus=YearBonus;
}
    display(): void{
        super.display();
        console.log("veteran: ", this.veteran)
        console.log("Year Bonus: ", this.YearBonus)
            }
}

class CEO extends Manager{
public stocks:number;
public constructor(firstName:string,lastName:string, address: string,salary:number, veteran:string, YearBonus:string, stocks:number){
    super(firstName,lastName, address,salary,veteran,YearBonus);
this.stocks = stocks;
}
display(): void{
    super.display();
    console.log("stocks: ", this.stocks)
}
}
let adam = new Person("first Man ","Adam " );
adam.display();
console.log("--------------*-------------")
let worker = new Employee("Billy","Bob ","chiwawa St. 4",4000 );
worker.display();
console.log("--------------*-------------")
let bossMan = new Manager("The","Boss ","New York City, Angels St. 4",4000,"40 years","5454$" );
bossMan.display();
console.log("--------------*-------------")
let master = new CEO("The","Master Magic ","Heaven st. 666",4000,"40 years","500$",9999 );
master.display();