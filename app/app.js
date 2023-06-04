const express = require("express");

const PORT = 8080;

const app = express();

app.get("/api/health", (req, res) => {
	res.send("Server is running");
});

app.listen(PORT, () => {
	console.log("Server listening on port" + PORT);
});
