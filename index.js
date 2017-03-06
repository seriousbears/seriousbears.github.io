// This function will toggle the embeded Chat window on and off
function toggleChat() {
	// If your window is too small to use the Chatroom in the same page.. open in new window
	if ($(window).width() < 500) {
		window.open("http://chat.seriousbears.net/");
	}
	else {
		if (document.getElementById("chatContainer").style.display == "none" || document.getElementById("chatContainer").style.display === "") {
			document.getElementById("homepage").style.display = "none";
			document.getElementById("chatContainer").style.display = "block";
		}
		else {
			document.getElementById("homepage").style.display = "block";
			document.getElementById("chatContainer").style.display = "none";
		}
	}
}
// This function will return you back to the main page
function returnHome() {
	if (document.getElementById("homepage").style.display == "none" || document.getElementById("homepage").style.display === "") {
		document.getElementById("homepage").style.display = "block";
		document.getElementById("chatContainer").style.display = "none";
	}
}