
const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const {api}=require("./routes/api")

const path=require('path')
const app =express()
app.use(cors({
    origin: /^http:\/\/localhost:\d+$/
}));
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')))
app.use("/v1",api)
//for additional 
// app.use("/v2",v2router)


app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports=app;