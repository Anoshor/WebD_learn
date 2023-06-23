const mongoose = require('mongoose');
// const assert = require('assert');
const { ObjectId } = require('mongodb');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');






const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 8,
//     review: "Pretty solid heh" 
// });
const watermelon = new Fruit ({
    name: "watermelon",
    rating: 1,
    review: "shit heheh"
});

// watermelon.save();

const Person = mongoose.model("Person",personSchema);
const person = new Person ({
    name: "John",
    age: 37
});


const kiwi = new Fruit ({
    name: "Kiwi",
    score: 0,
    review: "what is this???"
});
const banana = new Fruit ({
    name: "Banana",
    score: 10,
    review: "GOAT"
});
const orange = new Fruit ({
    name: "Orange",
    score: 9,
    review: "Sour and Salted"
});
const pineapple = new Fruit ({
    name: "Pineapple",
    score: 5,
    review: "Pineapple on Pizza yayay"
});

// pineapple.save();

// Fruit.insertMany([kiwi, orange, banana]), function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("success");
//     }
// }

const Amy = new Person ({
    name: "Amy",
    age: 25,
    favouriteFruit: pineapple
});

// Amy.save();


Fruit.find()
    .then(function(fruits){
        for (var i=0; i<fruits.length; i++) {
            console.log(fruits[i].name);
            // console.log(fruits);
        }
        // mongoose.connection.close();
        // console.log(fruits);
    })
    .catch(function(err){
        console.log(err);
    });
Person.find()
    .then(function(people){
        for (var i=0; i<people.length; i++) {
            console.log("QUERY 2");
            console.log(people[i].favouriteFruit);
            // console.log(fruits);
        }
        // mongoose.connection.close();
        // console.log(fruits);
    })
    .catch(function(err){
        console.log(err);
    });


    // or
    // fruits.forEach(function(fruit){
        // console.log(fruit.name);
    // });

    // Fruit.updateOne({_id:  new ObjectId("643b0eb7f0322399d973d1de")}, {$set: {name: "Peach"}})
    // .then(result => {
    //     // If the update was successful, log the result object, which includes information about the updated document
    //     console.log(result);
    // })
    // .catch(error => {
    //     // If an error occurred during the update operation, log the error object
    //     console.log(error);
    // });
     
    Fruit.updateOne({name: "John"}, {favouriteFruit: pineapple})
    .then(result => {
        // If the update was successful, log the result object, which includes information about the updated document
        console.log("successfully added the favouriteFruit");
    })
    // .catch(error => {
    //     // If an error occurred during the update operation, log the error object
    //     console.log(error);
    // });
    // Fruit.deleteOne({_id:  new ObjectId("643b0ebb750e48ce4e01245d")})
    // .then(result => {
    //     // If the update was successful, log the result object, which includes information about the updated document
    //     console.log(result);
    // })
    // .catch(error => {
    //     // If an error occurred during the update operation, log the error object
    //     console.log(error);
    // });

// BOILERPLATE// BOILERPLATE// BOILERPLATE
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));