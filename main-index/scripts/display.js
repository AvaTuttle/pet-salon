function displayCards(){
    let card="";
    for(let i=0; i<pets.length; i++){
        let pet = pets[i];
        card+=`
        <div class="pet ${pet.service}">
            <p>Type: ${pet.type}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
        </div>
        `;
        console.log(card);
    }
    document.getElementById("pets").innerHTML=card;
}


function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}

function displayTable() {
    let row = "";
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        row += `
        <tr>
            <td>${pet.type}</td>
            <td>${pet.breed}</td>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td><button class="btn btn-delete" onclick="deletePet(${i})">Delete</button></td>
        </tr>
        `;
    }
    document.getElementById("petTableBody").innerHTML = row;
}


