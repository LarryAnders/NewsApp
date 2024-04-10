const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const pgp = require("pg-promise")();
const session = require("express-session");
const path = require("path");
const checkAuthorization = require('./utils/authorization')

const userRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");

const PORT = 3000;
const CONNECTION_STRING = "postgress://postgres:postgres@localhost:5432/newsdb";

const VIEWS_PATH = path.join(__dirname, "/views");

//registering/configuring view engine
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.use("/css", express.static("css")); //first css is url, second css is folder name

app.use(
  session({
    secret: "akljsdhfkljsld",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next) => {
  res.locals.authenticated = req.session.user == null ? false : true  //false else true
  next()
})

db = pgp(CONNECTION_STRING);


// setup routes
app.use("/", indexRoutes);
app.use("/users",checkAuthorization,userRoutes);

app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
