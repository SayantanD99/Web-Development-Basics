const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitsSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type : Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('fruit', fruitsSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Great"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: "John",
    age: 30
});

person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Best Fruit!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "Good"
});

const banana = new Fruit({
    name: "Banana",
    rating: 7,
    review: "Energetic"
});

const newFruits = [kiwi, orange, banana];

Fruit.insertMany(newFruits)
.then(function () {
console.log("Successfully saved defult items to DB");
})
.catch(function (err) {
console.log(err);
});

Fruit.find(newFruits).then(function () {
        console.log(newFruits);
        })
        .catch(function (err) {
        console.log(err);
        });