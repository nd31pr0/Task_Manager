const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use("/api/tasks", taskRoutes);
// const logger = (req, res, next) => {
//     console.log('MiddleWare ran')
//     console.log(req.method);
//     next();
// }

// Routes    
app.get("/", (req,res) => {
    res.send("Home Page")
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