const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] } // type Point (which is a string)
});
 
restaurantSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('Restaurant', restaurantSchema)

// A 2dsphere index supports queries that calculate geometries on an Earth-like sphere.

// - GeoJSON is a format for encoding a variety of geographic data structures. 
// It can support different types of data like Point, LineString, Polygon, 
// MultiPoint, MultiLineString, MultiPolygon.

// GeoJSON, as it name implies, is JSON data with a specific 
// structure specifically designed to treat geospatial information.

// One of the coolest features of MongoDB is that it allows us to work 
// with GeoJSON format. 

// Example of a Point Format

/*
{
  type: "Point",
  coordinates: [2.213213, 42.123423]
}
*/
