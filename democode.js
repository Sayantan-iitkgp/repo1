const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up view engine
app.set("view engine", "ejs");

// Middleware for serving static files
app.use(express.static('./public'));

app.get("/profile/:username",function(req,res) {
  res.send(`Hello ${req.params.username}`);
});

// Route to render the contact page
app.get("/contact", function (req, res) {
  //return {base:"dfh"}
  res.render("page", { base: "Contact Us" });
});

// Route to handle form submission
app.post("/api/1", (req, res) => {
  const name = req.body.name; // Extracting the name from the request body
  const response = {
    success: true,
    message: `Hello, ${name}!`
  };
  res.json(response); // Sending response with the username in a structured JSON format
});

// Start the server
const PORT = 4023;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
