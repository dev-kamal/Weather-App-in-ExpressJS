const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// public static path
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set("views", templatesPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// routing
app.get("/", (req, res) => {
	res.render("index", {
		title: "Home",
		home: "active",
	});
});

app.get("/weather", (req, res) => {
	res.render("weather", { title: "Weather", weather: "active" });
});
app.get("/about", (req, res) => {
	res.render("about", { title: "About", about: "active" });
});
app.get("*", (req, res) => {
	res.render("404", { title: "404" });
});

app.listen(8000, () => {
	console.log("Listning From The 8000");
});
