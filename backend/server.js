import express from "express";
import dotenv from "dotenv";
import colors from 'colors'

import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import {errorHandaler, notFound} from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.get('/',(req,res) => {
    res.send('Node is running');
});

app.use('/api/products',productRoute);

app.use(notFound);

app.use(errorHandaler);

const port = process.env.PORT || 5000;

app.listen(port,console.log(`Node is running in ${process.env.ENV} mode on port ${port}`.yellow));