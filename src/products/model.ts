import { ProductSchema } from "./schemat";
import {model} from "mongoose"

 export const ProductModel =  model("products", ProductSchema);

// export default model("ProductModel", ProductModel);

