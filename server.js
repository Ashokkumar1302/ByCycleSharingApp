const express=require("express")
const dotenv=require('dotenv')
const cors=require('cors')
const morgan=require('morgan')
const connectDb = require("./config/db")

dotenv.config()
//db connection
connectDb();

//rest object
const app=express()
//middleware
app.use(cors());
app.use(express.json())
app.use(morgan("dev"))


app.use('/api/v1/auth',require('./routes/authR'));
app.use('/api/v1/cycle',require('./routes/bicycles'))
app.use('/api/v1/booking',require('./routes/bookings'))

app.get('/',(req,res)=>{
    return res.status(200).send("<h1>welcome to server app</h1>");

});
//port
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`node server running ${port}`);
});