const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://root:example@mongodb:27017';

// Database Name
const dbName = 'myproject';

(async function () {
    // Create a new MongoClient
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        // Use connect method to connect to the Server
        await client.connect();
        const db = client.db(dbName);

        const document = {
            name: "ourDocument",
            type: "SomeType"
        }

        const collection = db.collection('myCollection');

        // Insert a document into the collection
        await collection.insertOne(document);

        // Get all the documents out of the collection
        const docs = await collection.find().toArray();
        console.log('find() ---------------------------------')
        console.log(docs);

        // Get a specific document out by key
        const one = await collection.findOne({name: 'ourDocument'});
        console.log('findOne() --------------------------------')
        console.log(one);

        // Update a document by key
        await collection.updateOne({name: 'ourDocument'}, {
            $set: {
                type: 'SomeNewType'
            }
        });

        // Get it back out to prove it updated:
        const updatedOne= await collection.findOne({ name: 'ourDocument' });
        console.log('updatedOne --------------------------------')
        console.log(updatedOne);

        // Delete Many
        await collection.deleteMany({ name: 'ourDocument' });

        // Get all the documents out of the collection
        const newDocs = await collection.find().toArray();
        console.log('newDocs ---------------------------------')
        console.log(newDocs);
    
    } catch (err) {
        console.log(err.stack);
    }

    client.close();
})();
