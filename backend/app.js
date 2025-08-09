const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const subRoutes = require('./routes/subscription.routes');
const mealRoutes = require('./routes/meal.routes');
const orderRoutes = require('./routes/order.routes');
const planRoutes = require('./routes/plan.routes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Specify the allowed origin
    credentials: true // Allow sending of credentials (cookies, auth headers)
  }));
app.get('/HbtChk',(req,res)=>{
    console.log("hbtchk...");
    res.send("hbtchk...");
});
app.use('/api/auth', authRoutes);
app.use('/api/subscription', subRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/plans', planRoutes);


module.exports = app;
