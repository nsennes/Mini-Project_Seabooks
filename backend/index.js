// Import
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Database Connection
const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_38jtxs",
  password: "OOui0dnHuH0rUy40",
  database: "lab_blank01_383qkwa",
});
connection.connect(() => {
  console.log("Database is connected");
});
global.connection = connection;

// Create express app
const app = express();
const port = 6901;

var corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json({ type: "application/json" }));

// Routes
app.listen(port, () => {
  console.log("App is running at port " + port);
});
<<<<<<< HEAD

app.delete("/delete", require("./routes/endpoint_delete"));
=======
>>>>>>> 1a95b4b495be0fd2aee39928ade9457980681ead
