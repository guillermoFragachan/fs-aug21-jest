"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// import express from "express";
const express = require("express");
const index_1 = __importDefault(require("./products/index"));
const app = express();
exports.app = app;
app.use(express.json());
app.get('/test', (req, res) => {
    res.send({ message: "Test successful" });
});
app.use('/products', index_1.default);
