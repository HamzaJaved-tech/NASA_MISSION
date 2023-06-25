async function httpGetPlanets() {
  const response = await fetch("http://localhost:8000/planets")
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return [];
      }
    })
    .catch((e) => {
      console.error(e);
      return [];
    });
  return response;
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
