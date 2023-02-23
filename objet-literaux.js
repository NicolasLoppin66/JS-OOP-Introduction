"use strict"; // Activation du mode strict pour plus d'info sur les erreurs de structuration
console.log('Hello world');

// Objet literal representant une voiture dans un site de vente d'occas
const carPeugeot = {
    id: 5,
    label: 'Peugoet 2008 GT a vendre',
    brand_id: 5,
    brand: {
        id: 5,
        label: 'Peugoet',
    },
    price: 15000.00,
    getTaxePrice: function () {
        return this.price * 1.2
    }
};

console.log('Prix taxé', carPeugeot.getTaxePrice());

// Objet literal representant une autre voiture
const carRenault = {
    id: 2,
    label: 'Reno 4 aile moin chair ke la pigeot de mon voison',
    brand_id: 3,
    brand: {
        id: 3,
        label: 'Renault',
    },
    price: 5000.00,
    getTaxePrice: function () {
        return this.price * 1.2
    }
};

console.log('Prix taxé', carRenault.getTaxePrice());

// Pour éviter de dipluquer du code on peut crée un modele d'objet, qui pourra par copie
// etre utiliser pour crée plusieur voiture différentes. 
const car = {
    id: 0,
    label: '',
    brand_id: 0,
    brand: {
        id: 0,
        label: '',
    },
    price: 0.00,
    getTaxePrice: function () {
        return this.price * 1.2
    }
};

// Modèle d'objet pour la marque
const brand = {
    id: 0,
    label: '',
};

// Pour crée une copie d'un objet existant: Object.create(unObjet)
const carCitroen = Object.create( car );
carCitroen.id = 3;
carCitroen.label = 'Critrono PiPo a vendre';
carCitroen.brand_id = 6;
carCitroen.brand = Object.create( brand );
carCitroen.brand.id = carCitroen.brand_id;
carCitroen.brand.label = 'Citroen';
carCitroen.price = 2000.00;

console.log(car);
console.dir(carCitroen);
