const express = require('express')
const app = express()
const PORT = 3000

// in-built middleware function in express. parses incoming requests with JSON payload.
app.use(express.json())
