console.log("register.js")
let pets =[];
//create pets
let pet1 = {
    name:"scooby",
    age:4,
    gender:"Male",
    Service:false,
    Breed:"Choocolate Labrador"
}
let pet2 = {
    name:"Miley",
    age:7,
    gender:"Female",
    service:true,
    Breed:"Pomeranian"
}

let pet3 = {
    name:"Sir Grunge McAllister",
    age:12,
    gender:"Male",
    Service:false,
    Breed:"Dachshound"
}

pets.push(pet1, pet2, pet3)

function displayNames(){
    document.body.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
        document.write(pets[i].name + "<br>");        
    }
}