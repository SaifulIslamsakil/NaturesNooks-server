import mongoose from "mongoose";
import app from "./app"
import { confiq } from "./app/confiq";

const main = async () => {
    await mongoose.connect(confiq.Database_url as string);
    app.listen(confiq.Port, () => {
        console.log(`Example app listening on port ${confiq.Port}`)
    })
}


main()