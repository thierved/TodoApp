const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/TodoApp");

module.exports = {mongoose};