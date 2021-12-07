import express from "express"
import { ProductModel } from "./model.js"

const productsRouter = express.Router()

productsRouter
    .get('/', async (req, res) => {
        const products = await ProductModel.find({})
        res.send(products)
    })
    .post("/", async (req, res) => {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(201).send(product)
    })

productsRouter
.get('/:id', async (req, res) => {
    const product = await ProductModel.findById(req.params.id)
    res.status(200).send(product)
})
.put('/:id', async (req, res) => {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).send(product)
})
.delete('/:id', async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id)
    res.status(200).send("Product deleted")
})

export default productsRouter