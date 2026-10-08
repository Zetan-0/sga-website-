//JavaSscript

// This is a section built for connecting 3rd party data from the University of Lynchburg to Student Government Central.
// This is the first server out of 2 server.js files.

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("static"));

const slides = [
  {
    image: "/:Outdoor-Hopwood-student-faculty-600.jpg",
    label: "SGA Rally",
    title: "Campus Voices in Action"
  },
  {
    image: "/:Outdoor-Hopwood-student-faculty-600.jpg",
    label: "Student Life",
    title: "Events, Clubs, and Community"
  },
  {
    image: "https://www.lynchburg.edu/wp-content/uploads/2020/09/Outdoor-Hopwood-student-faculty-600.jpg",
    label: "Weekly Buzz",
    title: "Weekly Buzz"
  }
];

app.get("/api/slides", (req, res) => {
  res.json(slides);
});

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});