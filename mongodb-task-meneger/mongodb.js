// //Crud with mongo

// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const objectID= mongodb.ObjectID

// const {MongoClient, ObjectID} = require('mongodb');


// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'mongodb-task-meneger'

// const id = new ObjectID()
// console.log(id)


// MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
//   if (error) {
//     return console.log ('unable to connect to database!')
//   }

//   // console.log('Connected correctly!')


//   const db= client.db(databaseName)

//   // db.collection('users').insertOne({
//   //   name:'yana',
//   //   age:30
//   // }, (error, result)=>{
//   //   if (error) {
//   //     return console.log('unable to insert user')
//   //   }

//   //   console.log(result.ops)
//   // })
// })