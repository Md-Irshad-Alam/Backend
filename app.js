require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');
require('./connection/Connection');

var app = express();

app.use(cors());
var bodyParser = require('body-parser');
require('dotenv').config();
require('./connection/Connection');

// Server Basic Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.listen(4500, (req, res) => {
  console.log('server is live on port 4500');
});
// Routes List

app.use('/api/role-permission', require('./routes/RoleRoutes'));
app.use('/api/auth', require('./routes/AuthRoute'));
app.use('/api/store', require('./routes/StoreRoute'));
app.use('/api/ForePartCategory', require('./routes/ForePartCategoryRoute'));
app.use('/api/HeelCategory', require('./routes/HeelCategoryRoute'));
app.use('/api/EmployeeCategory', require('./routes/EmployeeCategoryRoute'));
app.use('/api/Employee', require('./routes/AddEmployeeRoute.js'));
app.use('/api/Ingredient', require('./routes/IngredientRoute'));
app.use('/api/Type', require('./routes/TypeRoute'));
app.use('/api/currency', require('./routes/CurrencyRoute.js'));
app.use('/api/designation', require('./routes/DesignationRoute'));
app.use('/api/color', require('./routes/ColorMasterRoute'));
app.use(
  '/api/ArticleGroupMaster',
  require('./routes/ArticleGroupMasterRoute.js')
);
app.use('/api/state', require('./routes/stateMasterRoute.js'));
app.use('/api/country', require('./routes/CountryRoute'));
app.use('/api/UOM', require('./routes/UOMRoute'));
app.use('/api/AddCategory', require('./routes/AddCategoryRoute'));
// app.use('/api/ProductCategory', require('./routes/ProductCategoryRoute.js'));
app.use('/api/Productlist', require('./routes/ProductlistRoute.js'));
app.use('/api/Product', require('./routes/ProductRoute.js'));
app.use('/api/customer', require('./routes/CustomerRoute'));
app.use('/api/StandardWeight', require('./routes/StandardWeightRoute.js'));
app.use('/api/ProductMidsole', require('./routes/ProductMidsoleRoute.js'));

module.exports = app;
