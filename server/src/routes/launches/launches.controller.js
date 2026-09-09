 const {getAlllaunches,Addnewlaunches,existwithID, abortedlaunchbyID}=require('../../models/launches.models');

function httpgetAlllaunches(req,res){
     return res.status(200).json(getAlllaunches())
}
function httpAddnewLaunch(req,res){
   const launch=  req.body;
   if(!launch.mission || !launch.rocket || !launch.target || !launch.launchDate){
     return res.status(400).json({
          error:"Missing field "
     });

   }
   launch.launchDate= new Date(launch.launchDate)
   if (isNaN(launch.launchDate)){
     return res.status(400).json({
          error:"data should be number"
     })
   }
   Addnewlaunches(launch)
   return res.status(201).json(launch)
     
}
function httpAbortLaunch(req,res){
     const launchid=Number(req.params.id)

     //if launch exist
     if(!existwithID(launchid)){
          
          return res.status(404).json({
          error:"launch not found"
     })
}
     //if exist
     const aborted =abortedlaunchbyID(launchid)
     return res.status(200).json(aborted)

}
module.exports = {
    httpgetAlllaunches,
    httpAddnewLaunch,
    httpAbortLaunch
}