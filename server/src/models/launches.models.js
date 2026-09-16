
// const launches=require('./launches.mongo');
// const planets=require('./planets.mongo')
// // const launches= new Map();

// let LastFlightNumber =100
// const launch={

//     flightNumber:100,
//     mission:'Kepler Exploration X',
//     rocket:'Explorer IS1',
//     launchDate:new Date('october 04,2005'),
//     target:"kepler--422 b",
//     cutomers:["nasa ","0tomastery"],
//     upcoming:true,
//     success:true,
// };
// savelaunch(launch)
// // launches.set(launch.flightNumber,launch)
// function existwithID(launchid){
//    return launches.has(launchid)
// }
    
//    async function getAlllaunches() {
//     return await launches
//     .find({},{'_id':0,'__v':0, })
// }
// async function savelaunch(launch){
//     const planet= await planets.findOne({
//         kepler_name:launch.target,
//     });
//     if(!planet){
//         throw new error("Error with no found the name");
//     }

//   await launches.updateOne({
//         flightNumber:launch.flightNumber,
//     },launch,{
//         upsert:true,
//     })
// }
// function Addnewlaunches(data){
//     LastFlightNumber ++;
    
//     launches.set(
//         LastFlightNumber,
//         Object.assign({}, launch, data, {
//             customers: ['zerotohero', 'nasa'],
//             upcoming: true,
//             success: true,
//             flightNumber: LastFlightNumber
//         })
//     );




// }
// function abortedlaunchbyID(launchid){
//     const aborted=launches.get(launchid)
//     aborted.upcoming=false;
//     aborted.success=false;
//     return aborted;

// }
// //if launch doesnot exist return 404
// // launches.get(100)=launch.flightNumber
// module.exports={
//     launches,Addnewlaunches,getAlllaunches,existwithID,abortedlaunchbyID
// }

const launches = require('./launches.mongo');

const planets = require('./planets.mongo');

const latest_default_number = 100;

let LastFlightNumber = 100;

const launch = {

    flightNumber: 100,

    mission: 'Kepler Exploration X',

    rocket: 'Explorer IS1',

    launchDate: new Date('October 04, 2005'),

    target: 'Kepler-422 b',

    customers: ['nasa', 'zerotomastery'],

    upcoming: true,

    success: true,

};


async function existwithID(launchid) {

    return await launches.exists({
        flightNumber: launchid
    });

}


async function getlatestFlightNumber() {

    const latestlaunch = await launches.findOne({}).sort('-flightNumber');

    if (!latestlaunch) {

        return latest_default_number;

    }

    return latestlaunch.flightNumber;

}


async function getAllLaunches() {

    return await launches.find(
        {},
        {
            _id: 0,
            __v: 0,
        }
    );

}


async function saveLaunch(launch) {

    const planet = await planets.findOne({

        kepler_name: launch.target,

    });

    if (!planet) {

        throw new Error('No matching planet found');

    }

    await launches.updateOne(

        {
            flightNumber: launch.flightNumber,
        },

        launch,

        {
            upsert: true,
        }

    );

}


async function scheuleNewLaunch(launch) {

    const newFlightNumber = await getlatestFlightNumber() + 1;

    const newLaunch = Object.assign({}, launch, {

        customers: ['ZeroTohero', 'nasa'],

        upcoming: true,

        success: true,

        flightNumber: newFlightNumber,

    });

    await saveLaunch(newLaunch);

    return newLaunch;

}


async function abortedlaunchbyID(launchid) {

    return await launches.findOneAndUpdate(

        {
            flightNumber: launchid
        },

        {
            upcoming: false,
            success: false
        },

        {
            new: true
        }

    );

}


module.exports = {

    launches,
    scheuleNewLaunch,
    getAllLaunches,
    existwithID,
    abortedlaunchbyID

};