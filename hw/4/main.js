var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.display = function () {
        console.log("first Name: ", this.firstName);
        console.log("last Name: ", this.lastName);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, address, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.address = address;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("address: ", this.address);
        console.log("salary: ", this.salary);
    };
    return Employee;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, address, salary, veteran, YearBonus) {
        var _this = _super.call(this, firstName, lastName, address, salary) || this;
        _this.veteran = veteran;
        _this.YearBonus = YearBonus;
        return _this;
    }
    Manager.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("veteran: ", this.veteran);
        console.log("Year Bonus: ", this.YearBonus);
    };
    return Manager;
}(Employee));
var CEO = /** @class */ (function (_super) {
    __extends(CEO, _super);
    function CEO(firstName, lastName, address, salary, veteran, YearBonus, stocks) {
        var _this = _super.call(this, firstName, lastName, address, salary, veteran, YearBonus) || this;
        _this.stocks = stocks;
        return _this;
    }
    CEO.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("stocks: ", this.stocks);
    };
    return CEO;
}(Manager));
var adam = new Person("first Man ", "Adam ");
adam.display();
console.log("--------------*-------------");
var worker = new Employee("Billy", "Bob ", "chiwawa St. 4", 4000);
worker.display();
console.log("--------------*-------------");
var bossMan = new Manager("The", "Boss ", "New York City, Angels St. 4", 4000, "40 years", "5454$");
bossMan.display();
console.log("--------------*-------------");
var master = new CEO("The", "Master Magic ", "Heaven st. 666", 4000, "40 years", "500$", 9999);
master.display();
