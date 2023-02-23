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
const carCitroen = Object.create(car);
carCitroen.id = 3;
carCitroen.label = 'Critrono PiPo a vendre';
carCitroen.brand_id = 6;
carCitroen.brand = Object.create(brand);
carCitroen.brand.id = carCitroen.brand_id;
carCitroen.brand.label = 'Citroen';
carCitroen.price = 2000.00;

console.log(car);
console.dir(carCitroen);

// Manipulation sur les objet literaux
//  - Fusion de deux objets: Object.assign(objetCible, objetSource)
const objCible = {
    a: 5,
    b: 9,
    d: 6
};

const objSource = {
    c: 1,
    d: 25,
    e: 82
};

Object.assign(objCible, objSource);
console.dir(objCible);

// - Gel d'un objet (pour le rendre non modifiable): Object.freeze(unObjet)
// l'objet devient immutable
const objLambda = {
    age: 15,
    name: 'toto',
};

Object.freeze(objLambda)
// objLambda.age = 13; // En mode strict, on a une erreur (sinon la modif ne marche pas mais pas d'erreur)

console.dir(objLambda);

// Object.assign() peut etre utiliser pour cloner un objet (même gelé) avec un objetCible vide
const objLambdaCopie = Object.assign({}, objLambda);
// La copie ne récupère pas l'état gelé de l'objet source
objLambdaCopie.age = 12;

console.dir(objLambda);
console.dir(objLambdaCopie);

// On pourrait copier un objet avec Object.create(), mais cet methode conserve l'état gelé de l'obget de référence
const objLambdaCopie2 = Object.create(objLambda);
objLambdaCopie2.age = 18; // Erreur

console.dir(objLambdaCopie2);

// Doc de l'Object : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object