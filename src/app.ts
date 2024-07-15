import express, { Request, Response } from "express"
import cors from "cors"
import Route from "./app/route"
const app = express()

app.use(express.json())
app.use(cors({ origin: ["http://localhost:5173"] }))

// use Route
app.use("/api/v1", Route)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})



export default app
