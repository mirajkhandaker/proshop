import express from "express";
import dotenv from "dotenv";
import colors from 'colors'

import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();

connectDB();

const app = express();

app.get('/',(req,res) => {
    res.send('Node is running');
});

app.use('/api/products',productRoute);

app.use((req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(200);
    next(error)
});

app.use((err,req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message:err.message,
        stack:process.env.ENV === 'production' ? null : err.stack
    });
});

const port = process.env.PORT || 5000;

app.listen(port,console.log(`Node is running in ${process.env.ENV} mode on port ${port}`.yellow));