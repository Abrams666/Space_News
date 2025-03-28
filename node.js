const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	//res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end("hello world!!");
});

app.listen(80, () => {
	console.log(`Server running on port 80`);
});
