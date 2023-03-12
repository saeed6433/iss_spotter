const request = require('request-promise-native');

const fetchMyIP = function(){
 return request("https://api.ipify.org?format=json")
}

const fetchCoordsByIP = function(JSONIP) {
  let ip = JSON.parse(JSONIP).ip
  return(request(`http://ipwho.is/${ip}`))
};

const fetchISSFlyOverTimes = function(body){
  const { latitude, longitude } = JSON.parse(body);

  return(request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`))
}


const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};


module.exports = { nextISSTimesForMyLocation };