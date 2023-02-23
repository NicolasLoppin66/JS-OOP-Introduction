"use strict"; // Activation du mode strict pour plus d'info sur les erreurs de structuration
console.log('prototype playground');

// On va crée cet objet sous forme de prototype
// const car = {
//     id: 0,
//     label: '',
//     brand_id: 0,
//     brand: {
//         id: 0,
//         label: '',
//     },
//     price: 0.00,
//     getTaxePrice: function () {
//         return this.price * 1.2
//     }
// };

// Définition du constructeur du prototype
const Brand = function (jsonData) {
    this.id = jsonData.id;
    this.label = jsonData.label;
};

// Définition d'une méthode liée a une instance (instance = objet crée par new Brand()) (PHP: $unObjet->getGhettoLabel())
Brand.prototype.getGhettoLabel = function () {
    return this.label + ' wesh !';
};

const pegeotBrand = new Brand({ id: 2, label: 'Peugeot' });

console.log(pegeotBrand.getGhettoLabel());

// Prototype de car
const Car = function (jsonData) {
    this.id = jsonData.id;
    this.label = jsonData.label;
    this.brand_id = jsonData.brand_id;

    this.brand = new Brand(jsonData.brand);

    this.price = jsonData.price;

    Car.counter ++
}

// Définition d'une méthode liée a une instance
Car.prototype.getTaxePrice = function () {
    return this.price * 1.2;
};

// Définition d'une nouvelle propriété statique et une méthode statique
Car.counter = 0; // PHP: Car::counter
Car.count = function() { // PHP: Car::count()
    return `${Car.counter} Car sont sorties d'usine`;
}

const carPeugeot = new Car({
    id: 5,
    label: 'Peugoet 2008 GT a vendre',
    brand_id: 5,
    brand: {
        id: 5,
        label: 'Peugoet',
    },
    price: 15000.00,
});
console.log(Car.count());


const carNissan = new Car({
    id: 18,
    label: 'Nissan sx180',
    brand_id: 3,
    brand: {
        id: 3,
        label: 'Peugoet',
    },
    price: 30000.00,
});
console.log(Car.count());

console.dir(carPeugeot);
console.dir(carNissan);