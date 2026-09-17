const {
    getAllLaunches,
    scheuleNewLaunch,
    existwithID,
    abortedlaunchbyID
} = require('../../models/launches.models');


async function httpgetAlllaunches(req, res) {

    return res.status(200).json(
        await getAllLaunches()
    );

}


async function httpAddnewLaunch(req, res) {

    const launch = req.body;

    if (
        !launch.mission ||
        !launch.rocket ||
        !launch.target ||
        !launch.launchDate
    ) {

        return res.status(400).json({

            error: "Missing field"

        });

    }

    launch.launchDate = new Date(launch.launchDate);

    if (isNaN(launch.launchDate)) {

        return res.status(400).json({

            error: "data should be number"

        });

    }

    const newLaunch = await scheuleNewLaunch(launch);
    console.log(launch);

    return res.status(201).json(newLaunch);

}


async function httpAbortLaunch(req, res) {

    const launchid = Number(req.params.id);

    // if launch exist
    if (!(await existwithID(launchid))) {

        return res.status(404).json({

            error: "launch not found"

        });

    }

    // if exist
    const aborted = await abortedlaunchbyID(launchid);
    if(!aborted){
        return res.status(400).json({
            error:"Not found the launch id"
        })
    }
    

    return res.status(200).json({
        ok:true,
        
    });

}


module.exports = {

    httpgetAlllaunches,
    httpAddnewLaunch,
    httpAbortLaunch

};