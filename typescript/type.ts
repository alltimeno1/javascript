// interface
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Sungjun",
  age: 29,
  gender: "male",
}

// class
class Human {
  public name: string;
  public age: number;
  public gender: string; 
  constructor(name:string, age:number, gender?:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const Kim = new Human("Sungjun", 29, "male");

const sayHi = (person:Human): string => {
  return (`Hello ${person.name}, you are ${person.age} and ${person.gender}`)
} 

console.log(sayHi(person));
console.log(sayHi(Kim));

export {};