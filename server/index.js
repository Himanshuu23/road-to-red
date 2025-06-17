require('dotenv').config();
const express = require("express");
const connectDB = require('./config/db');

const userRouter = require('./routes/student');
const codeforcesRouter = require('./routes/codeforces'); 

connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/students', userRouter);
app.use('/codeforces', codeforcesRouter);

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));