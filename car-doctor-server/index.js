const express = require("express");
const cors = require("cors"); // Import the cors middleware
var jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
// middleware;
app.use(express.json());

// Enable CORS for all routes
app.use(cors({ origin: "*" }));
const userName = process.env.DB_USER;
const userPassword = process.env.DB_PASS;
console.log(userName, userPassword);
const uri = `mongodb+srv://${userName}:${userPassword}@cluster0.sfigf7b.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access 1" });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
    if (error) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access 2" });
    }
    req.decode = decode;
    next();
  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //
    const serviceCollection = client.db("cargian").collection("carServices");
    const bookingCollection = client.db("cargian").collection("bookings");

    // jwt
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10h",
      });
      console.log(user, token);
      res.send({ token });
    });

    // services routes
    app.get("/services", async (req, res) => {
      console.log(req.query.sort);
      console.log(req.query);
      const sort = req.query.sort;
      const search = req.query.search;
      try {
        const query = { title: { $regex: search, $options: "i" } };
        // const query = { price: { $eq: 20 } }; // equal to $lt mean
        // const query = { price: { $gte: 20, $lte: 26 } };
        // const query = { price: { $lt: 30 } }; // less than $lt mean
        // const query = { price: { $gt: 30 } };// greater than $gt mean
        // const query = { price: { $gte: 150 } }; // greater than $gte or equal to $gte mean
        // const query = { price: { $gte: 150 } }; // greater than $gte or equal to $gte mean
        const options = {
          sort: { price: sort === "asc" ? 1 : -1 }, // Sort by price in ascending order (low to high)
        };
        const cursor = serviceCollection.find(query, options);
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // find service via id
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { title: 1, price: 1, service_id: 1, img: 1 },
      };
      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });

    // bookings routes
    app.get("/bookings", verifyJWT, async (req, res) => {
      const decoded = req.decode;
      console.log(req.query.email);

      console.log("came back after verify", decoded);
      // console.log(req.headers.authorization);

      if (decoded.email !== req.query.email) {
        return res.status(403).send({
          error: 1,
          message: "forbidden access",
        });
      }
      let query = {};
      if (req.query?.email) {
        const email = req.query.email;
        query = { email: email };
      }
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });
    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });
    // update booking via id
    app.patch("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const updatedBooking = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: updatedBooking.status,
        },
      };
      const result = await bookingCollection.updateOne(filter, updateDoc);
      res.send(result);
      // console.log(booking);
    });
    // delete booking via id from user profile
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is running !");
});
app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
