"use strict"; // Activation du mode strict pour plus d'info sur les erreurs de structuration
console.log("C'est la classe");

const jsonCars = {
    timestamp: 4564897456,
    cars: [
        {
            id: 5,
            label: "Peugeot 404 pa chair",
            brand_id: 5,
            price: 550.0,
            brand: {
                id: 5,
                label: "Peugeot",
            },
        },
        {
            id: 7,
            label: "Reno 4 ailes moin chair ke la pigeot de mon voisin",
            brand_id: 3,
            price: 400.0,
            brand: {
                id: 3,
                label: "Renault",
            },
        },
    ],
};

// Une class comment en PHP
// pas de besoin de typage
class LabelEntity {
    id;
    label;

    constructor(jsonData) {
        this.id = jsonData.id;
        this.label = jsonData.label;
    }
}

// Brand hérite de LabelEntity
class Brand extends LabelEntity {
    // Déclaration de méhode public
    getGhettoLabel() {
        return this.label + " wesh !";
    }
}

// Car hérite de LabelEntity
class Car extends LabelEntity {
    // Déclaration des propriété static
    static counter = 0;

    // Déclaration des propriété public
    brand_id;
    brand;
    price;

    // ### Pour la demo de get et set
    // Propriété privé
    #paint;

    get color() {
        return this.#paint;
    }

    set color(val) {
        console.log(`Tu veux une voiture ${val}, bien tu l'auras en violet :P`);
        this.#paint = 'violet'
    }
    // ###

    // Surcharge du construteur parent
    constructor(jsonData) {
        // Appelle du constructeur parent(PHP: Parent::__construct())
        // En JS c'est obligatoire de déclarer le constructeur parent
        super(jsonData);

        this.brand_id = jsonData.brand_id;
        this.brand = new Brand(jsonData.brand);
        this.price = jsonData.price;

        Car.counter++;
    }

    // Déclaration de méthode static
    static count() {
        return `${Car.counter} Car sont sorties d'usine`;
    }

    getTaxePrice() {
        return this.price * 1.2;
    }
}

// Test des classes
let arrCars = [];
for (let car of jsonCars.cars) {
    arrCars.push(new Car(car));
}

console.log(arrCars);
