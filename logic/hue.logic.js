var config = require('../config');
var hue = require("node-hue-api");

var hueApi; //Initialized by the connect to bridge function

function init() {
    connectToBridge();
}
init();

function applyLightState(states) {
    return states.map(function(s){
        return hueApi.setLightState(getLightId(s.lightName),createLightState(s));
    });
}
module.exports.applyLightState = applyLightState;


function createLightState(state) {
    var ret = hue.lightState.create();
    ret.on(state.on);
    ret.bri(state.brightness);
    if(state.alert == 'short') ret.alertShort();
    if(state.alert == 'long') ret.alertLong();
    if(state.transitionTime) ret.transition(state.transitionTime);
    if(state.color.type == 'rgb') ret.rgb(state.color.red,state.color.green,state.color.blue);
    if(state.color.type == 'colorTemp') ret.colorTemp(state.color.colorTemp);
    return ret;
}

function getLightId(lightName) {
    if(!config.hueLights.hasOwnProperty(lightName)) {
        throw new Error('Light '+lightName+' not found in config file');     
    }   
    return config.hueLights[lightName];
}

function connectToBridge() {
	var hostname = config.hueBridgeHostname,
		username = config.hueBridgeApiUsername;
	hueApi = new hue.HueApi(hostname, username);
}


