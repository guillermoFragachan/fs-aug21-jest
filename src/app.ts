// import express from "express";
const express = require("express")
import productsRouter from "./products/index";

const app = express();

app.use(express.json())

app.get('/test', (req:any, res:any) => {
    res.send({ message: "Test successful" });
})

app.use('/products', productsRouter)

export { app }