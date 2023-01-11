function flightSchedule(arr) {
  let flightsList = arr[0];
  let updateFlightsStatus = arr[1];
  let flightStatusToCheck = arr[2];

  let flightInfo = {};

  flightInfo = Object.assign(flightsList);

  // For in loop
  for (const key in updateFlightsStatus) {
    if (Object.hasOwnProperty.call(updateFlightsStatus, key)) {
      const element = updateFlightsStatus[key];
      if (element.includes(flightStatusToCheck)) {
        let changedFlightStatus = Object.assign(element);
        console.log(changedFlightStatus);
      }
    }
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
