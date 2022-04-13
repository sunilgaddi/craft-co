const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())



// app.use('/search', require('./routes/routes'))


app.listen(8080, ()=> {
    console.log("Server Running on Port 8080")
})