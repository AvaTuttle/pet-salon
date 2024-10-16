let pets =[];

let inputType = document.getElementById("txtType");
let inputBreed = document.getElementById("txtBreed");
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputServices = document.getElementById("txtServices");

function Pet(type, breed,name, age, gender, service){
    this.type=type;
    this.breed=breed;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function isValid(pet) {
    let validation = true;

    if (pet.type === "") {
        validation = false;
        inputType.classList.add("error");
    } else {
        inputType.classList.remove("error");
    }

    if (pet.name === "") {
        validation = false;
        inputName.classList.add("error");
    } else {
        inputName.classList.remove("error");
    }

    if (pet.service === "") {
        validation = false;
        inputServices.classList.add("error");
    } else {
        inputServices.classList.remove("error");
    }

    return validation;
}

function register(){    
    let newPet = new Pet (inputType.value,inputBreed.value,inputName.value,inputAge.value,inputGender.value,inputServices.value);
    console.log(newPet);

    if(isValid(newPet)==true){
        pets.push(newPet);
        displayTotals();
        //displayCards(); 
        displayTable();//displayTable()
    }
}

function init(){
    console.log("init");
    let pet1 = new Pet("dog", "dalmation","scooby", 9, "male", "grooming");
    let pet2 = new Pet("dog", "Poodle", "Miley", 4, "female", "nails");
    let pet3 = new Pet("cat", "domestic Long Hair", "Sir Grunge McAllister", 13, "male", "bathing");
    pets.push(pet1,pet2,pet3);
    console.log(pets);

    document.getElementById("btnRegister").addEventListener("click", register);
    displayTotals();
    displayTable();
}

function deletePet(index) {
    // Remove the pet at the given index
    pets.splice(index, 1);

    // Update the display after deletion
    displayTotals();  // Updates the total number of pets
    displayTable();   // Re-renders the updated table
}


window.onload=init;