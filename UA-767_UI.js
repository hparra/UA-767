martinelli_url = "http://localhost:5000/devices/AND_UA-767PC";

initialize = function() {
	url = $(document).getUrlParam("martinelli_url");
	if (url) {
		martinelli_url = url;
	}
	
	$("#debug_button").bind("click", function() {
		
	});
};

updateUI = function(data) {
	
	code = UA767.parseCode(data);
	
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

poll_device = function() {
	
	method = "GET";
	$.getJSON(martinelli_url + "?method=" + method + "&callback=?", function(data) {
		//console.debug("Response: " + data.response);
		updateUI(data.response);
	});
	
};

toggleDebugPanel = function() {
	
}

$(document).ready(function() {
	initialize();
	setInterval(poll_device, 2000);
});