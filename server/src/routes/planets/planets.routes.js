const express=require('express')
const httpgetAllplanets=require('./planets.controller')
const planetsRouter=express.Router()
planetsRouter.get("/",httpgetAllplanets)

module.exports=planetsRouter;