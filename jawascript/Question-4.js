const person1 = { name: "keshav", age: 24 };
const person2 = { name: "suraj", age: 21 };




function introduce() {
    console.log(`Hello, I'm ${this.name}, and i'm ${this.age} years old.`);
}



introduce.call(person2);







