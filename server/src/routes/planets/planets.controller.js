const {getAllplanets}=require('../../models/planets.models')
 async function httpgetAllplanets(req,res){
 return res.status(200).json(  await getAllplanets())
}
module.exports=httpgetAllplanets;