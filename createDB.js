var MongoClient = require('mongodb').MongoClient

var data = require("./data.js").data

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("scp-191");
database.dropDatabase()
database = client.db("scp-191");
const SCP = database.collection("scp");
const result = await SCP.insertOne({name:"scp-191"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
