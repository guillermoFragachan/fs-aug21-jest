import express from 'express'
import  {ProductModel}  from "./model"

const productsRouter = express.Router()

productsRouter
    .get('/', async (req, res) => {
        const products = await ProductModel.find({})
        res.send(products)
    })
    .post("/", async (req:any, res:any) => {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(201).send(product)
    })

productsRouter
.get('/:id', async (req:any, res:any) => {
    const product = await ProductModel.findById(req.params.id)
    if (!product) {
        res.status(404).send('Product not found')
    }else{
        res.status(200).send(product)
    }
})
.put('/:id', async (req:any, res:any) => {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!product) {
        res.status(404).send('Product not found')
    }else{
        res.status(200).send(product)
    }
})
.delete('/:id', async (req:any, res:any) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id)
   if (!product) {
       res.status(404).send('Product not found')
   }else{
    res.status(204).send("Product deleted")
   }
})

export default productsRouter