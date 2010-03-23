/* depends on jQuery */
// TODO: check for jQuery or inject it

// A&D UA-767(PC|BT) Digital Blood Pressure Monitor
UA767 = {
	
	// Checks to see is string is valid UA-767 return data e.g. '804C4C4960'
	// returns string if valid or null if not
	validateData = function(data) {
		// check length = 10
		// check codes = {80, 81, 82, 83}
	},
	
	// 80--------
	// returns string
	parseCode = function(data) {
		
	},
	
	// --4C------
	// returns integer
	parsePulsePressure = function(data) {
		
	},
	
	// ----4C----
	// returns integer
	parseDiastolicPressure = function(data) {
		
	},
	
	// ------49--
	// returns integer
	parsePulsePerMinute = function(data) {
		
	},
	
	// I have no idea what this value represents
	// --------60
	// returns integer
	parseUnknown = function(data) {
		
	},
	
	// PulsePressure + DiastolicPressure
	// returns integer
	parseSystolicPressure = function(data) {
		
	},
	
	// Fake Data
	// returns string
	getFakeData = function(data) {
		// 
		return "804C4C4960";
	}
}

updateUI = function() {
	
	data = getFakeData();
	
	code = parseCode(data);
	
	if (code == "80") {
		Ps = UA767.parseSystolicPressure(data);
		Pd = UA767.parseDiastolicPressure(data);
		bpm = UA767.parsePulsePerMinute(data);
		
		$("#sys").text(Ps);
		$("#dia").text(Pd);
		$("#pul").text(bpm);
	}
	else {
		$("#sys").text("");
		$("#dia").text("");
		$("#pul").text("Err");
	}
};


$(document).ready(function() {
	updateUI();
});