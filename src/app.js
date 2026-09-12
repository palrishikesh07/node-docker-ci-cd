const expres = require("express");
const helmet = require("helmet");
const cors = require("cors");
const pinoHttp = require('pino-http');

const productRoutes = require("");
const errorHandler = require("./middleware/error.middlewar");
const  rateLimit= require("express-rate-limit");

const app = expres();

const limiter = rateLimit({
    windowMs:15*60* 1000,
    max:100,
})


app.use(helmet());
app.use(cors());
app.use(expres.json({
    limit:"1md"
}));
app.use(pinoHttp());

app.use("/api",rateLimit);

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        status:"Up",
        timestamp:new Date().toISOString()
    })
})

app.use("/api/products",productRoutes);
app.use(errorHandler);

module.exports =app;