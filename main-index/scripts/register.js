let pets =[];

function Pet(type, breed,name, age, gender, service){
    this.type=type;
    this.breed=breed;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function register(){
    let inputType = document.getElementById("txtType").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputServices = document.getElementById("txtServices").value;
    
    let newPet = new Pet (inputType,inputBreed,inputName,inputAge,inputGender,inputServices)
    console.log(newPet);
    pets.push(newPet);
}

function init(){
    console.log("init");
    let pet1 = new Pet("dog", "scooby", 9, "male", "Grooming")
    let pet2 = new Pet("dog", "Miley", 4, "female", "nails")
    let pet3 = new Pet("cat", "Sir Grunge McAllister", 13, "male", "bathing")
    pets.push(pet1,pet2,pet3)
    console.log(pets)

}

window.onload=init;