// **Server Setup and Initialization**
const express = require("express"); // Import the Express framework
require("./db/conn");
const MensSchema = require("./models/schema");
const router = require("./routes/router");

const app = express();
const port = process.env.PORT || 9000;

// **Middleware Configuration**
app.use(express.json()); // Parse incoming JSON data in request bodies
// **Route Mounting**
app.use(router);

// **Server Start**
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
