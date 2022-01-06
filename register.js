let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00 am",
        closed:"5:00 pm"
    },
    pets:[
        {
            name:"Riley",
            age:"11",
            gender:"female",
            breed:"black lab",
            service:"Grooming",
            ownerName:"Brett Bryant",
            Contact:"8806 5338"
        },
        {
            name:"Loki",
            age:"7",
            gender:"male",
            breed:"Tabby",
            service:"Check-up",
            ownerName:"Brett Bryant",
            Contact:"8806 5338"
        },
        {
            name:"Ruca",
            age:"5",
            gender:"female",
            breed:"Abyssinian",
            service:"Check-up",
            ownerName:"Brett Bryant",
            Contact:"8806 5338"
        }
        ]
}

//name, age, gender, breed, service, owner name, contact phone
function displayInfo(){
    document.getElementById("footer-info").innerHTML=`<p>${saloon.address.street},${saloon.address.number}, ZIP code: ${saloon.address.zip}</p><p>${saloon.address.city},${saloon.address.state}</p>`;
}

function displayPetNames(){
    console.log(saloon.pets[0].name);
    console.log(saloon.pets[1].name);
    console.log(saloon.pets[2].name);
}

function showAlert(){
    alert("This is how many pets are registered: " + saloon.pets.length);
}

function getInfo(){
    let petName = document.getElementById("txtPetName").value;
    let age = document.getElementById("nbAge").value;
    let gender = document.getElementById("dlGender").value;
    let breed = document.getElementById("txtBreed").value;
    let service = document.getElementById("dlService").value;
    let ownerName = document.getElementById("txtOwnerName").value;
    let phone = document.getElementById("txtPhone").value;

    let pet = new Pet(petName, age, gender, breed, service, ownerName, phone);

    saloon.pets.push(pet);

    console.log(pet);

    for(let i=0; i<saloon.pets.length; i++)
    {
        console.log(saloon.pets[i]);
    }

    document.getElementById("petInfo").reset();

    //console.log(`${petName} ${age} ${gender} ${breed} ${service} ${ownerName} ${phone}`);
}

function Pet(petName, age, gender, breed, service, owner, phone){
    this.name = petName;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
}

displayInfo();

displayPetNames();

showAlert();

getInfo();

