import express from "express"

import { createServer } from "http"

// Start the app
const app = express()
//Connections
app.use(express.json())

const PORT = 3000

//just for test
app.get("/", (req, res) => {
  return res.send("working")
})
/*Server with http method*/
const serverHttp = createServer(app)

serverHttp.listen(PORT, (): void => {
  console.log(`Listenning port ${PORT}`)
})
