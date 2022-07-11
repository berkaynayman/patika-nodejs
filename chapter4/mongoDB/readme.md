show dbs

use pcat-test-db

db.photos.insertOne( { title: "Photo 1", desc: "Photo lorem ipsum 1", qty: 20} )

show collections

db.photos.find()

db.photos.insertMany([
    { title: "Photo 2", desc: "Photo lorem ipsum 2", qty: 22 },
    { title: "Photo 3", desc: "Photo lorem ipsum 3", qty: 23 }
])

db.photos.find({title: "Photo 1"})

db.photos.find({title: "Photo 1", qty:23})

db.photos.updateOne( {title: "Photo 1"}, { $set: {qty:25}} )

db.photos.deleteOne({qty: 25})