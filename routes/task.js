import express from 'express'
import {
  getTask,
  createTask,
  getAllTask,
  deleteTask,
  updateTask,
} from '../controllers/task.js'
const router = express.Router()

// get all task
router.get('/', getAllTask)
// add a task
router.post('/', createTask)
//get single task
router.get('/:id', getTask)
// update task
router.patch('/:id', updateTask)
// delete task
router.delete('/:id', deleteTask)

export default router
