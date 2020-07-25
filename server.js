const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
// const routes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allows cross-origin requests from our React dev server
app.use(cors({ credentials: true, origin: `http://localhost:3000` }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
app.use(require("./routes/book-routes"));


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Listening on ${PORT}!`);
});
