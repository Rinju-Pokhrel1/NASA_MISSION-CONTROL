const API_URL = 'http://localhost:8000';
async function httpGetPlanets() {

  // TODO: Once API is ready.
  const response =await fetch(`${API_URL}/planets`);

  // Load planets and return as JSON.
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
 const fetchedLaunches = await response.json()
 return fetchedLaunches.sort((a,b)=>{
   return a.flightNumber -b.flightNumber
 });

  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
   console.log("Sending launch:", launch);
  try {
    const response = await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch),
    });
     console.log("Response:", response);

    return response;
  } catch (err) {
    console.error(err);

    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try{
  // TODO: Once API is ready.
  const response= await fetch(`${API_URL}/launches/${id}`, 
    {
      method:'DELETE',
  // Delete launch with given ID.
    }
   
  
)
 return response
}
catch(error){
  console.log(error);
  return{
    ok:false,
  }
  
}
}


export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};