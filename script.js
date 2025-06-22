const pets = [
    { "name": "Buddy", "type": "Dog", "age": 1, "img": "petshop-img/dogs/dog01.jpg" },
    { "name": "Max", "type": "Dog", "age": 4, "img": "petshop-img/dogs/dog02.jpg" },
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" },
    { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" },
    { "name": "Coco", "type": "Bird", "age": 2, "img": "petshop-img/birds/bird01.jpg" },
    { "name": "Yoda", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog03.jpg" },
    { "name": "Goldie", "type": "Bird", "age": 1, "img": "petshop-img/birds/bird02.jpg" },
    { "name": "Melon", "type": "Capybara", "age": 5, "img": "petshop-img/capybaras/capybara01.jpg" },
    { "name": "Me", "type": "Capybara", "age": 4, "img": "petshop-img/capybaras/capybara02.jpg" },
];

function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon."); 
}
function renderPets(filteredPets) {
    const $container = $('#all-pets');
    $container.empty();
    filteredPets.forEach(pet => {
        const petHTML = `
            <div class="pet">
                <img src="${pet.img}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>Type: ${pet.type}</p>
                <p>Age: ${pet.age} years</p>
                <button onclick="adoptPet()">Adopt Now</button>
            </div>
        `;
        $container.append(petHTML);
    });
}

function filterPets() {
    const selectedTypes = $('input[name="pet-type"]:checked').map(function () {
        return this.value;
    }).get();

    const filtered = pets.filter(pet => selectedTypes.includes(pet.type));
    renderPets(filtered);
}

$(document).ready(function () {
    renderPets(pets);
    $('input[name="pet-type"]').on('change', filterPets);
});
