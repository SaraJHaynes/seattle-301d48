'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

// API Routes
app.get('/ping', (request, response) => {
  response.send('pong');
})
//http://localhost:3000/location?data=barcelona
app.get('/location', (request, response) => {
  response.send(request.query.data);

  //DANGER: USE MOCK DATA FOR NOW
  const mockLocationData = require('./data/geo.json');

  const mockLocationDigest = {
    search_query : request.query.data,
    formatted_query : mockLocationData.results[0].formatted_address,
    latitude : mockLocationData.results[0].geometry.location.lng
  }
  // return mockLocation;
  response.send(mockLocationDigest);

  const location = new Location(quest.query.data, mockLocationData.results[0]);

  response.send(location);
})

function Location(query, geoData) {
  this.query = ;
  this.formatted_query = geoData.formatted_address;
  this.latitude = ;
  this.longitude = ;
}

// Refactor the searchToLatLong function to replace the object literal with a call to this constructor function:
// function Location(query, geoData) {
//   this.search_query = query;
//   this.formatted_query = geoData.result[0].formatted_address;
//   this.latitude = geoData.results[0].geometry.location.lat;
//   this.longitude = geoData.results[0].geometry.location.lng;
// }

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
