console.log("register.js")
let pets =[];
//create pets
let pet1 = {
    name:"scooby",
    age:4,
    gender:"Male"

}
let pet2 = {
    name:"Miley",
    age:7,
    gender:"Female"

}

let pet3 = {
    name:"Sir Grunge McAllister",
    age:12,
    gender:"Male"

}

pets.push(pet1, pet2, pet3)

function displayNames(){
    //display pet neames
    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(pets[2].name);
    //hint: use a for loop and travel the array
    //hint: length the amount of elements on the array
    //write on HTML, not console
}