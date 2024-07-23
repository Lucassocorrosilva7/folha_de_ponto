const express = require('express');
const path = require('path');
const app = express();
const timesheetRoutes = require('../routes/timesheetRoutes');
const errorHandler = require('../middleware/errorHandler');

// Middleware
app.use(express.json());
app.use('/timesheet', timesheetRoutes);

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para tratamento de erros
app.use(errorHandler);

module.exports = app;
