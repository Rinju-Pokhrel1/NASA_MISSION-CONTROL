const express=require("express")
const {
    httpgetAlllaunches,
    httpAddnewLaunch,
    httpAbortLaunch
} = require('./launches.controller');
const launchRouter=express.Router();
launchRouter.get('/', httpgetAlllaunches)
launchRouter.post('/', httpAddnewLaunch)
launchRouter.delete('/:id',httpAbortLaunch)


module.exports=launchRouter