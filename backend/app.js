import { download } from './alldebrid-actions.js'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.post("/api", async (req, res) => {
    const result = await download(req.body.link);
    console.log(req.body.link)
    res.json({ message: result.data.link})
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})
