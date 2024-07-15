import express, { Request, Response } from "express"
import cors from "cors"
import Route from "./app/route"
import globalErrorHandling from "./app/midlewares/globalErrorHandling"
const app = express()

app.use(express.json())
app.use(cors({ origin: ["http://localhost:5173"] }))

// use Route
app.use("/api/v1", Route)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


app.use(globalErrorHandling)
app.use()


export default app
