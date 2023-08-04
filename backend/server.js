const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const Task = require('./model/taskModel');


const app = express();

//Middleware
app.use(express.json())
// const logger = (req, res, next) => {
//     console.log('MiddleWare ran')
//     console.log(req.method);
//     next();
// }

// Routes    
app.get("/", (req,res) => {
    res.send("Home Page")
})

//Create a task: 
app.post('/api/tasks', async (req, res) => {
   
   try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
   } catch (error) {
    res.status(500).json({msg: error.message})
   }

})

const PORT = process.env.PORT || 5000;



const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
}
};
startServer();