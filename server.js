import 'dotenv/config'
import express from 'express'
import tasks from './routes/task.js'
import connectDB from './db/connect.js'
import notFound from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

// error
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
