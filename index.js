//* To test fetchMyIP
// const {fetchMyIP} = require("./iss");
//
// fetchMyIP((error, ip) => {
//   if(error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

//* To test fetchCoordsByIP
// const {fetchCoordsByIP} = require("./iss");
//
//const ip = "174.95.102.227"
//
// fetchCoordsByIP(ip, (error, data) => {
//   if(error) {
//     console.log("It didn't work!" , error);
//   } else console.log(data);
// })

//* To test fetchISSFlyOverTimes
// const {fetchISSFlyOverTimes} = require("./iss");
//
// const coords = { latitude: '49.27670', longitude: '-123.13000' }
//
// fetchISSFlyOverTimes(coords, (error, data) => {
//   if(error) {
//     console.log("It didn't work!" , error);
//   } else console.log(data);
// })

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});