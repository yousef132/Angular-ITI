/**Variables */
var x = "Hello";
// console.log(x);
// x = 10;
x = "Ahmed";
x = "Hi";
var y;
y = 10;
// console.log(y);
// y = "";
y = 100;
y = 5;
var z = true; //type Inference ==> var z:boolean = true;
z = false;
z = true;
// z = "";
// console.log(a1);//undefined
var a1; //any ==> [error angualr]
a1 = "Hamada";
a1 = 10;
a1 = {};
a1 = [];
a1 = true;
a1 = function () { };
var a2 = ""; // [♥]
a2 = "Hamada";
a2 = 10;
a2 = {};
a2 = [];
a2 = true;
a2 = function () { };
//boolean ==> number ==> string
var b1 = "Ahmed"; //string
var b2 = 10; //number
var b3 = b1 + b2; //"Ahmed10"
/**custom DataType
 * - array
 * - object
 * - function
 * - class
 * - inheretance
 * - abstract Class
 * - Interface
 * */
//Custom Data Type
let x1;
x1 = "Hello";
x1 = 10;
// x1 = true;
// x1= {};
// x1= [];
let arr1;
arr1 = [];
// arr1 = [5];
// arr1 = ["hi"];
// arr1 = [true];
let arr2;
// arr2 = [];
arr2 = [5];
// arr2 = [5,10];
// arr2 = ["hi"];
let arr3;
arr3 = [1, "Hi"];
// arr3 = []
// arr3 = [5]
// arr3 = ["",""]
let arr4;
arr4 = [];
arr4 = [1];
arr4 = [5, 7];
arr4 = [5, 7, 10];
arr4 = [5, 7, 10, 0];
// arr4 = [5,7,10,0,""]
// arr4 = [5,7,10,0,true]
// arr4 = [5,7,10,0,[]]
let arr5; // arr5: string[] | number
arr5 = [];
arr5 = ["Hello"];
// arr5 = [5];
// arr5 = ["Hello",5];
// arr5 = 10;
let arr6;
arr6 = ["Hello", "Hi"];
arr6 = [10, 15];
// arr6 = [10,15,""]
let arr7;
arr7 = [];
arr7 = ["Hello"];
arr7 = [5];
arr7 = [5, "Hi", 10, "", 10, 15];
/**custom DataType
 * - array
 * - object
 * - function
 * - class
 * - inheritance
 * - abstract Class
 * - Interface
 * */
// * - object
let obj;
obj = {};
obj = { name: "Ahmed" };
obj = { name: "Ahmed", age: 22 };
let obj2;
// obj2 = {};
obj2 = { name: "Ahmed" };
// obj2 = {name:"Ahmed",age:20};
obj2 = { name: 25 };
let obj3;
// obj3 = {name:25}
obj3 = { name: "Ahmed" };
let obj4;
obj4 = { name: "Ahmed", age: 20, address: "123 st" };
obj4 = { name: "Ahmed", age: 20 };
let arrObj;
arrObj = [];
arrObj = [
    { name: "Aly", age: 25 },
    { name: "Ahmed", age: 22 },
];
let kareem;
kareem = [];
kareem = [""];
kareem = [10];
kareem = [true];
kareem = [true, 10, "", {}, [], function () { }];
// var ggg = {};
// let arrObj3:typeof ggg[];
// arrObj3 = [];
// arrObj3 = [10];
// arrObj3 = ["Hello"];
// arrObj3 = ["Hello",0];
//Functions
// function Add(x:number=0,y:number=0){
// function Add(x=0,y=0){
//     return x+y;
//     // if(x){
//     // }else{
//     //     // return;//undefined
//     // }
// }
// Add(5,10)//15;
// // Add("5",10)//510;
// Add();//0
// Add(5);//5+0=5
// Add(5,10);//15
//Classes
class Person {
    constructor(name = "Person Name", age = 0) {
        this.name = name;
        this.age = age;
        // name:string;
        // age:number;
        // constructor(name="Person Name", age=0){
        //     this.name = name;
        //     this.age = age;
        // }
        this.address = "123 st";
        if (this.constructor == Person) {
            Person.counter++;
        }
    }
    getName() {
        return this.name;
    }
    get Address() {
        return this.address;
    }
    set Address(val) {
        this.address = val;
    }
}
Person.counter = 0;
// class Test{
//   private name:string;
//   get GetNameWithDiffName(){
//     return this.name;
//   }
//   set SetWithDiffName(name:string){
//     this.name = name;
//   }
// }
// let p2 = new Person("ali",25);
// console.log(p2);
// let t = new Test();
// t.SetWithDiffName = "aliasdfasfd";
// console.log(t.GetNameWithDiffName);
class Employee extends Person {
    constructor(name) {
        super(name, 10);
    }
}
let emp = new Employee("Omar osman");
console.log(emp);
class APerson {
    GetName() {
        return this.name;
    }
}
class tmp extends APerson {
    GetAge() {
        console.log();
    }
}
