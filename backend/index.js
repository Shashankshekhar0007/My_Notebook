const connectToMongo = require('./db');
const express = require('express')
const app = express()
const cors = require('cors')

const port = 5000
connectToMongo();

app.use(cors())
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`My_NoteBook Backend app listening on port ${port}`)
})
