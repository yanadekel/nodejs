const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'ex15-restaurant_collection'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database!')
  }

  // console.log('Connected correctly!')


  const db = client.db(databaseName)
  //1.1 – Write a MongoDb query to display all the documents in the restaurant collection.
  // db.collection('restaurants').find({}).toArray ((error, restaurants)=>{
  //   if (error) {
  //     return console.log('unable to find collection')
  //   }

  //   console.log(restaurants)
  // })
  /////////////////////////////////////////////////////////////////////////////////////////

  //1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine


  // db.collection('restaurants').find({ cuisine:"street food"}).toArray ((error, restaurants)=>{
  //   if (error) {
  //     return console.log('unable to find collection')
  //   }

  //   console.log(restaurants)
  // })
  ////////////////////////////////////////////////////////////////////////////////////////////

  //1.3 - Write a MongoDb query that displays only kosher restaurants
  // db.collection('restaurants').find({ kosher:true}).toArray ((error, restaurants)=>{
  //     if (error) {
  //       return console.log('unable to find collection')
  //     }

  //     console.log(restaurants)
  //   })
  /////////////////////////////////////////////////////////////////////////////////////////////////
  //1.4 - Write a MongoDb query that displays only a specific cities restaurants

  // db.collection('restaurants').find({ "address.city":"Tel Aviv"}).toArray ((error, restaurants)=>{
  //   if (error) {
  //     return console.log('unable to find collection')
  //   }

  //   console.log(restaurants)
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////
  //1.5 - Write a MongoDb query to display a specific restaurants address
  // db.collection('restaurants').findOne({name:"asian delight" }, (error, restaurant)=>{
  //   if (error) {
  //     return console.log('unable to find collection')
  //   }

  //   console.log(restaurant.address)
  // })
  ///////////////////////////////////////////////////////////////////////////////////////
  //1.6 - Write a MongoDb query to display a specific restaurants coordinates

  // db.collection('restaurants').findOne({name:"asian delight" }, (error, restaurant)=>{
  //   if (error) {
  //     return console.log('unable to find collection')
  //   }

  //   console.log(restaurant.name + restaurant.address.coordinates)
  // })
  //////////////////////////////////////////////////////////////////////////////

  //1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
  // db.collection('restaurants').find().sort({name:1}).toArray ((error, restaurants)=>{
  //     if (error) {
  //       return console.log('unable to find collection')
  //     }

  //     console.log(restaurants)
  //   })
  ///////////////////////////////////////////////////////////////////////////////
  //1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.

  // db.collection('restaurants').find().sort({"address.city":1}).toArray ((error, restaurants)=>{
  //   if (error) {
  //     return console.log('unable to find collection')
  //   }

  //   console.log(restaurants)
  // })
  ////////////////////////////////////////////////////////////////////////////////////////
  //1.9 - Update a specific restaurant's name

  // db.collection('restaurants').updateOne({_id: new ObjectID("607de93444c4970520add7c3")},{$set:{name:"coconut jely"}})
  // .then((result)=>{
  //   console.log(result)
  // }).catch((error)=>{
  //   console.log(error)
  // })

  //1.10 - Update a specific restaurant by adding a new review.

  // db.collection('restaurants').updateOne({ _id: new ObjectID("607de93444c4970520add7c2") }, {
  //   $set: {
  //     "reviews.3": {
  //       date: new Date("2017-01-01T00:00:00.000Z"),
  //       score: 2.0,
  //     }
  //   }
  // })
  //   .then((result) => {
  //     console.log(result)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //1.11 - Update all restaurants to be kosher
  // db.collection('restaurants').updateMany({ kosher: false }, {
  //   $set: {
  //     kosher: true
  //   }
  // })
  //   .then((result) => {
  //     console.log(result)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //1.12 - Delete a specific restaurant
  //  db.collection('restaurants').deleteOne({_id: new ObjectID("607de93444c4970520add7c5")})
  //     .then((result) => {
  //       console.log(result)
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  ///////////////////////////////////////////////////////////////////////////////////////////////
  //2.2 - Write a MongoDb query to print all restaurant cities
//   db.collection('restaurants').find().forEach(function (mydoc)
//    { console.log ("city :"+ mydoc.address.city)
// })


})