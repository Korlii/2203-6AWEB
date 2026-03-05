const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb://localhost:27017";
const DATABASENAME = "MyDb";
let database;

app.use((req, res, next) => {
  if (!database) {
    return res.status(503).json({ error: "Database not connected yet." });
  }
  next();
});

async function start() {
  try {
    const client = new MongoClient(CONNECTION_STRING, {
      serverSelectionTimeoutMS: 10000,
    });
    await client.connect();
    database = client.db(DATABASENAME);
    console.log("Connected to MongoDB: Teyvat Registry Active");
    app.listen(5038, () => {
      console.log("Server running on http://localhost:5038");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}
start();

app.get("/api/citizenship/GetCitizens", async (req, res) => {
  try {
    const result = await database.collection("Citizenship").find({}).toArray();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
});

app.post("/api/citizenship/AddCitizen", multer().none(), async (req, res) => {
  try {
    const total = await database.collection("Citizenship").countDocuments();
    const newEntry = {
      id: String(total + 1),
      name: req.body.name,
      nation: req.body.nation,
      vision: req.body.vision,
      weaponType: req.body.weaponType,
      role: req.body.role
    };
    await database.collection("Citizenship").insertOne(newEntry);
    res.json("Citizen Registered Successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add" });
  }
});

app.put("/api/citizenship/UpdateCitizen", multer().none(), async (req, res) => {
  try {
    const filter = { id: req.body.id };
    const updateDoc = {
      $set: {
        name: req.body.name,
        nation: req.body.nation,
        vision: req.body.vision,
        weaponType: req.body.weaponType,
        role: req.body.role
      }
    };
    await database.collection("Citizenship").updateOne(filter, updateDoc);
    res.json("Registry Updated Successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to update" });
  }
});

app.delete("/api/citizenship/DeleteCitizen", async (req, res) => {
  try {
    await database.collection("Citizenship").deleteOne({ id: req.query.id });
    res.json("Citizen Record Deleted");
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
});