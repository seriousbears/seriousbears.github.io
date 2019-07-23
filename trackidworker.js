// RECURSIVE POLL FOR STREAM METADATA WRAPPED INTO A WEB WORKER
function getTrackID() {
	setInterval(function () {
		console.log("Web worker is now polling for metadata...");
		var xhr = new XMLHttpRequest();
		xhr.open('GET', "//listen.seriousbears.net/stats", true);
		xhr.send();
		xhr.addEventListener("readystatechange", processRequest, false);

		function processRequest(e) {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				// send back the string through the webworker thread
				console.log("NP: " + response.icestats.source[0].title);
				postMessage(response.icestats.source[0].title);
			}
		}
	}, 5000);
}
getTrackID();
