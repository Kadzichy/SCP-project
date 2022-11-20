var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("SCP");
database.dropDatabase()
database = client.db("SCP");
const scp = database.collection("scp");
const result = await scp.insertOne({name:"scp"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
