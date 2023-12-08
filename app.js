var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require("cors")
var bodyParser = require('body-parser')
require("dotenv").config()
require("./connection/Connection")

var app = express();

// Server Basic Setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Routes List
app.use("/api/role-permission", require("./routes/RoleRoutes"))
app.use("/api/auth", require("./routes/AuthRoute"))
app.use("/api/store", require("./routes/StoreRoute"))
app.use("/api/ForePartCategory", require("./routes/ForePartCategoryRoute"))
app.use("/api/HeelCategory", require("./routes/HeelCategoryRoute"))
app.use("/api/EmployeeCategory", require("./routes/EmployeeCategoryRoute"))
app.use("/api/Ingredient", require("./routes/IngredientRoute"))
app.use("/api/Type", require("./routes/TypeRoute"))
app.use("/api/designation", require("./routes/DesignationRoute"))
app.use("/api/color", require("./routes/ColorMasterRoute"))
app.use("/api/ArticleGroupMaster", require("./routes/ArticleGroupMasterRoute.js"))
app.use("/api/country", require("./routes/CountryRoute"))
app.use("/api/UOM",require('./routes/UOMRoute'))
app.use("/api/AddCategory", require("./routes/AddCategoryRoute"))
app.use("/api/ProductCategory", require("./routes/ProductCategoryRoute.js"))
app.use("/api/Productlist",require("./routes/ProductlistRoute.js"))
app.use('/api/customer', require('./routes/CustomerRoute'));



module.exports = app;