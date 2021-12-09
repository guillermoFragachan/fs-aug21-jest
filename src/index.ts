import  {app}  from './app'
import {connect} from "mongoose"

process.env.TS_NODE_DEV && require("dotenv").config();

const port = process.env.PORT || 3000;

const mongoURL = process.env.MONGO_URL

console.log(process.env.MONGO_URL!)

connect(mongoURL!)
    .then(() => {
        console.log(`Connected to Mongo`);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })




