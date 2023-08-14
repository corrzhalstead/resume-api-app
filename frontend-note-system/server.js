const express = require("express"); // Import Express
const app = express(); // Create an Express application

app.get("/", (req, res) => {
  // Define a route handler for the default home page
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 5000; // Define a port

app.listen(PORT, () => {
  // Tell the app to listen on that port
  console.log(`Server is running on port ${PORT}`);
});
