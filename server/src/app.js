
const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const planetRouter =require('./routes/planets/planets.routes')
const path=require('path')
const launchRouter = require('./routes/launches/launches.routes')
const app =express()
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')))

app.use("/planets",planetRouter)
app.use('/launches',launchRouter)
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports=app;