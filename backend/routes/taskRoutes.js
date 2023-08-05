const express = require('express');
const Task = require('../models/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');
const router = express.Router();

//Create a task: 
router.post('/', createTask)
 
router.get("/", getTasks);

router.get('/:id', getTask);

router.delete('/:id', deleteTask);
router.put("/:id", updateTask);

//the two lines below would do same with the above lines  from 7 to 14
// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;