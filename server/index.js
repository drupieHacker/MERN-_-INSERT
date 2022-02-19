const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
app.use(cors());
app.use(express.json())
/// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://hacker_drupieLN2022:cDMbDOZJSwmT7LnB@cluster0.3qefq.mongodb.net/tutorialmern?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.post("/addfriend", async (req, res) => {
  // const friend = new FriendModel({ name: "Lilian Noemi", age: 24, description: "This is girl from mexico" });
  // await friend.save();
  // res.send("Inserted DATA");
  const name = req.body.name
  const age = req.body.age
  const apellido=req.body.apellido
const friend = new FriendModel({ name:name, age: age,apellido:apellido });
await friend.save();
res.send("success");
  });



// app.get("/insert", async (req, res) => {
// const friend = new FriendModel({ name: "Lilian Noemi", age: 24, description: "This is girl from mexico" });
// await friend.save();
// res.send("Inserted DATA");
// });

app.get("/read", async (req, res) => {
  FriendModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("You are connected!");
});