const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.json(
    { 
        name: "Amit", 
        age: 25 
    });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
