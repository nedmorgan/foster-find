const mongoose = require("./connection.js")
const User = require("../models/User.js")
const Foster = require("../models/Foster.js")
const Shelter = require("../models/Shelter.js")

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

const betsy = new Foster({
  name: 'Betsy',
  breed: 'Pitbull mix',
  gender: 'Female',
  age: '2 years old',
  size: 'Medium',
  adoptionFee: '$100',
  petImg: 'https://www.flickr.com/photos/166184353@N02/33406027648/in/album-72157676977521607/',
  shelter: [fultonShelter]
})

const walter = new Foster({
  name: 'Walter',
  breed: 'Jack Russel Mix',
  gender: 'Male',
  age: '8 years old',
  size: 'Medium',
  adoptionFee: '$1000',
  petImg: 'https://www.flickr.com/photos/166184353@N02/40317151623/in/album-72157676977521607/',
  shelter: [atlantaHumane]
})

const gizmo = new Foster({
  name: 'Gizmo',
  breed: 'Calico',
  gender: 'Female',
  age: '4 years old',
  size: 'Medium',
  adoptionFee: '$100',
  petImg: 'https://www.flickr.com/photos/166184353@N02/32339891007/in/album-72157676977521607/',
  shelter: [fultonShelter]
})

const karen = new Foster({
  name: 'Karen',
  breed: 'Tabby',
  gender: 'Female',
  age: '3 years old',
  size: 'Medium',
  adoptionFee: '$125',
  petImg: 'https://www.flickr.com/photos/166184353@N02/47281662991/in/album-72157676977521607/',
  shelter: [atlantaHumane]
})