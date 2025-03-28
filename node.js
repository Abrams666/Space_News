const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
//onst cookieParser = require("cookie-parser");
app.use(express.json());

app.get("/", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(fs.readFileSync("./News/news.html", "utf8"));
});

// app.get("/news/:id", (req, res) => {
// 	const id = req.params.id;
// 	res.setHeader("Content-Type", "text/html");
// 	res.writeHead(200);
// 	res.end(fs.readFileSync(`.News/news${id}.html`, "utf8"));
// });

app.listen(80, () => {
	console.log(`Server running on port 80`);
});
