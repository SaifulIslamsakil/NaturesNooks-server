import express from "express"
import cors from "cors"
const app = express()
const port = 3000


app.use(express.json())
app.use(cors({origin:"http://localhost:5173"}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app
