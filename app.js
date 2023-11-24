var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./connection/Connection");

var app = express();

// Server Basic Setup
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes List
app.use("/api/role-permission", require("./routes/RoleRoutes"));
app.use("/api/auth", require("./routes/AuthRoute"));
app.use("/api/store", require("./routes/StoreRoute"));
app.use("/api/customer", require("./routes/CustomerRoute"));
// app.use("/api/color", require("./routes/ColorMasterRoute"))
// app.use("/api/designation", require("./routes/DesignationRoute"))
// app.use("/api/country", require("./routes/CountryRoute"))

module.exports = app;
