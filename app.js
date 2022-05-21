const express = require('express');

const app = express();
const studentRouters = require('./api/routes/student');
app.use('/students', studentRouters);

localhost:3000/students 

module.exports = app;