// Creating a map 
 const contactMap = new Map();

//  Adding contacts to the Map 

contactMap.set("keshav",{
    age:24,
    email:'keshavkr@gmail.com',
    location:'bihar',

});
contactMap.set("suraj",{
    age:24,
    email:'surajsr@gmail.com',
    location:'bihar',

});
contactMap.set("aman",{
    age:24,
    email:'amanar@gmail.com',
    location:'bihar',

});

function getcontact (name){
   return contactMap.get(name);
}

console.log(getcontact("keshav"));
console.log(getcontact("suraj"));
