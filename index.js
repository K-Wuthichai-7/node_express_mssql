const express = require("express");
const sql = require("./config/db.js");

const app = express();




// Define route for fetching data from SQL Server
app.get("/", (request, response) => {
    // Execute a SELECT query
      sql.query("SELECT * FROM Employee", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});