const {getAllplanets}=require('../../models/planets.models')
function httpgetAllplanets(req,res){
res.status(200).json(getAllplanets())
}
module.exports=httpgetAllplanets;