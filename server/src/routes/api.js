const express=require('express')
const planetRouter =require('./planets/planets.routes')
const launchRouter = require('./launches/launches.routes')
const api =express.Router()
api.use("/planets",planetRouter)
api.use('/launches',launchRouter)
module.exports={api}