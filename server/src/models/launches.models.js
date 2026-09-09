

const launches= new Map();
let LastFlightNumber =100
const launch={

    flightNumber:100,
    mission:'Kepler Exploration X',
    rocket:'Explorer IS1',
    launchDate:new Date('october 04,2005'),
    target:"kepler--422 b",
    cutomers:["nasa ","0tomastery"],
    upcoming:true,
    success:true,
};
launches.set(launch.flightNumber,launch)
function existwithID(launchid){
   return launches.has(launchid)
}
    
    function getAlllaunches() {
    return Array.from(launches.values());
}
function Addnewlaunches(data){
    LastFlightNumber ++;
    
    launches.set(
        LastFlightNumber,
        Object.assign({}, launch, data, {
            customers: ['zerotohero', 'nasa'],
            upcoming: true,
            success: true,
            flightNumber: LastFlightNumber
        })
    );




}
function abortedlaunchbyID(launchid){
    const aborted=launches.get(launchid)
    aborted.upcoming=false;
    aborted.success=false;
    return aborted;

}
//if launch doesnot exist return 404
// launches.get(100)=launch.flightNumber
module.exports={
    launches,Addnewlaunches,getAlllaunches,existwithID,abortedlaunchbyID
}
