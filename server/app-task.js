const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);