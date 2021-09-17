const express = require("express");
const server = express();
const nunjucks = require("nunjucks");
const port = process.env.PORT;

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

nunjucks.configure("./", { express: server, autoescape: true });

const donors = [{}];

server.get("/", (req, res) => {
  res.render("index.html", { donors });
});

server.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  donors.push({ name, email, blood });

  res.redirect("/");
});

server.listen(port || 3000, () => {
  console.log(`Server is running on port ${port}`);
});
