const express = require("express")
const app = express()
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

const StudentRouter = require("./routers/StudentRouter")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(helmet())
app.use(cors())

app.use("/", StudentRouter);

app.listen(8000)