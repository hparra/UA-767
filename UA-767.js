/* depends on jQuery */
// TODO: check for jQuery or inject it

/*
Substring done properly INCLUDES the end index.
*/
String.prototype.sub = function(start, end) {
	return this.substring(start, end + 1);
}

// A&D UA-767(PC|BT) Digital Blood Pressure Monitor
UA767 = {
	
	// Checks to see is string is valid UA-767 return data e.g. '804C4C4960'
	// returns string if valid or null if not
	validateData: function(data) {
		// check length = 10
		// check codes = {80, 81, 82, 83}
	},
	
	// 80--------
	// returns string
	parseCode:  function(data) {
		return data.sub(0,1);
	},
	
	// --4C------
	// returns integer
	parsePulsePressure:  function(data) {
		return parseInt(data.sub(2,3), 16);
	},
	
	// ----4C----
	// returns integer
	parseDiastolicPressure:  function(data) {
		return parseInt(data.sub(4,5), 16);
	},
	
	// ------49--
	// returns integer
	parsePulsePerMinute:  function(data) {
		return parseInt(data.sub(6,7), 16);
	},
	
	// I have no idea what this value represents
	// --------60
	// returns integer
	parseUnknown:  function(data) {
		return data.sub(8,9);
	},
	
	// PulsePressure + DiastolicPressure
	// returns integer
	parseSystolicPressure:  function(data) {
		return this.parsePulsePressure(data) + this.parseDiastolicPressure(data);
	},
	
	// Fake Data
	// returns string
	getFakeData:  function(data) {
		// 
		return "804C4C4960";
	},
	
	openCommunicationPort:  function() {
		// STX + "C" + "PC" + "05" + CheckSum("C" + "PC" + "05")
		return "0243504330353B";
	},
	
	closeCommunicationPort:  function() {
		// STX + "C" + "PC" + "04" + (CheckSum = "3A")
		return "02 43 5043 3034 3B";
	}
	
	//"02 43 5043 3430 3B"
	
	// ACK: "013730504306"
	// NAK: "013730504315"
};