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
  description: `Gizmo is a fun loving cat that loves to get into trouble. She enjoy plotting your demise from a secure vantage point, but also loves to get her belly rubbed. She's would be a wonderful addition to any family.`,
})

const betsy = new Foster({
  name: 'Betsy',
  breed: 'Pitbull mix',
  gender: 'Female',
  age: '2 years old',
  size: 'Medium',
  adoptionFee: '$1,000,000',
  petImg: 'https://farm8.staticflickr.com/7889/33406027648_dba404c408_b.jpg',
  description: `Betsy was rescued from the streets and has been in foster care for quite sometime. She really enjoys eating leaves and snuggling at night. She's great with other dogs and enjoys laying in any patch of sun available.`,
})

const carl = new Foster({
  name: 'Carl',
  breed: 'Pug',
  gender: 'Male',
  age: '6 years old',
  size: 'Small',
  adoptionFee: '$100',
  petImg: 'https://farm8.staticflickr.com/7875/33413783618_2f26eaf2de_b.jpg',
  description: `Carl is a lovely little pug with a very adventerous spirit. Carl is a big fan of snacks and relaxing with his foster family. Carl may be small, but he has a big heart.`,
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
  animals: [betsy, gizmo, carl]
})

const walter = new Foster({
  name: 'Walter',
  breed: 'Jack Russel Mix',
  gender: 'Male',
  age: '8 years old',
  size: 'Medium',
  adoptionFee: '$1,000,000',
  petImg: 'https://farm8.staticflickr.com/7817/40317151623_740250fe06_b.jpg',
  description: `Walter is an incredibly smart dog. He does great with other dogs and cats and loves to be the center of attention. He loves squeeky toys and will do anything to make sure they are destroyed properly.`,
})

const karen = new Foster({
  name: 'Karen',
  breed: 'Tabby',
  gender: 'Female',
  age: '3 years old',
  size: 'Medium',
  adoptionFee: '$125',
  petImg: 'https://farm8.staticflickr.com/7880/47281662991_5b02ef185a_b.jpg',
  description: `Karen is exactly how you expect her to be, an angel. Karen loves to play with shiny objects and has a certain zest for living. Karen's favorite toy is her stuffed bear that she sleeps with every night.`,
})

const alice = new Foster({
  name: 'Alice',
  breed: 'Short-hair',
  gender: 'Female',
  age: '1 year old',
  size: 'Small',
  adoptionFee: '$150',
  petImg: 'https://farm8.staticflickr.com/7906/46566144934_1e1e02af25_b.jpg',
  description: `Alice is a small cat that has tiger-like energy. She loves to play with other cats and explore. She also really enjoys curling up on her foster Dad's chest and taking a nap.`,
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
  animals: [walter, karen, alice]
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

Foster.remove({})
  .then(() => Foster.create([gizmo, betsy, walter, karen, carl, alice]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));