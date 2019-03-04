const mongoose = require("./connection.js")
const User = require("../models/User.js")
const Foster = require("../models/Foster.js")
const Shelter = require("../models/Shelter.js")

const ned = new User({
  name: 'Ned',
  localShelter: 'Fulton County Animal Services',
})

const gizmo = new Foster({
  name: 'Gizmo',
  breed: 'Calico',
  gender: 'Female',
  age: '4 years old',
  size: 'Medium',
  adoptionFee: '$100',
  petImg: 'https://farm8.staticflickr.com/7891/32339891007_018bba6fc0_b.jpg',
})

const betsy = new Foster({
  name: 'Betsy',
  breed: 'Pitbull mix',
  gender: 'Female',
  age: '2 years old',
  size: 'Medium',
  adoptionFee: '$100',
  petImg: 'https://farm8.staticflickr.com/7889/33406027648_dba404c408_b.jpg',
})

const fultonShelter = new Shelter({
  name: 'Fulton County Animal Services',
  address: {
    street: '860 Marietta Blvd NW',
    city: 'Atlanta',
    state: 'GA',
    zipCode: '30318'
  },
  phoneNumber: '404-613-0358',
  animals: [betsy, gizmo]
})

const walter = new Foster({
  name: 'Walter',
  breed: 'Jack Russel Mix',
  gender: 'Male',
  age: '8 years old',
  size: 'Medium',
  adoptionFee: '$1000',
  petImg: 'https://farm8.staticflickr.com/7817/40317151623_740250fe06_b.jpg',
})

const karen = new Foster({
  name: 'Karen',
  breed: 'Tabby',
  gender: 'Female',
  age: '3 years old',
  size: 'Medium',
  adoptionFee: '$125',
  petImg: 'https://farm8.staticflickr.com/7880/47281662991_5b02ef185a_b.jpg',
})

const atlantaHumane = new Shelter({
  name: 'Atlanta Humane Society',
  address: {
    street: '981 Howell Mill Rd NW',
    city: 'Atlanta',
    state: 'GA',
    zipCode: '30318'
  },
  phoneNumber: '404-875-5331',
  animals: [walter, karen]
})

Shelter.remove({})
  .then(() => Shelter.create([atlantaHumane, fultonShelter]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

User.remove({})
  .then(() => User.create([ned]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));