
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const  architMiddleware = (req,res,next)=>{
  // console.log(req)
} // Express middleware refers to a set of functions that execute during the processing of HTTP requests received by an Express application.

app.use(express.static(path.join(__dirname,"public")))
app.use(architMiddleware)


app.get('/', (req, res) => {
  res.send('Hello World!')

})
app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)

})
app.get('/about', (req, res) => {
//   res.send('about')
  res.sendFile(path.join(__dirname,'index.html'))
  res.status(501)
  res.json({"archit":34})

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})