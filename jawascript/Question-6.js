// Task 1: Create the displayinfo function 
function displayinfo (name,role){
    console.log(`name: ${name}, Role: ${role}`);
}

displayinfo.call(null, "keshav", "Developer");
displayinfo.apply(null, ["suraj","Designer"]);
 

function greet () {
    console.log(`Hello, ${this.name}!`);
}

const user = { name: "rahul"};
const boundGreet = greet.bind(user);
boundGreet();
