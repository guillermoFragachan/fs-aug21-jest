import mongoose from "mongoose"

interface IproductSchema {
    name: string
    price: number
}

export const ProductSchema = new mongoose.Schema<IproductSchema>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
})
