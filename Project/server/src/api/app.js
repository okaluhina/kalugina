const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const startDb = require("./config/mongodb");

const usersRouter = require('./routes/users');
const companiesRouter = require('./routes/companies');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/auth');

const app = express();
app.use(cors());

//change
startDb();

// change: only for dev env
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', usersRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/register', registerRouter);
app.use('/api/auth', authRouter);

module.exports = app;
