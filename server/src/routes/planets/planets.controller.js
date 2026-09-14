const {getAllplanets}=require('../../models/planets.models')
 async function httpgetAllplanets(req,res){
 await res.status(200).json(getAllplanets())
}
module.exports=httpgetAllplanets;