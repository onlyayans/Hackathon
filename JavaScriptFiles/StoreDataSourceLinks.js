function launchBing() {
	window.location.href = "https://www.bing.com/";
}

function monitorFire() {
	window.location.href = "FireMonitoring.html";
}

function getNewsFeed() {
	window.location.href = "https://www.google.co.in/search?q=search+fire+in+india&oq=search+fire+in+india&aqs=chrome..69i57j69i64.4370j0j4&sourceid=chrome&ie=UTF-8#q=forest+fire+in+india";
}

function ready() {
	$.getJSON("JsonData/twitterResponse.json", function(json) {
		console.log(json); // this will show the info it in firebug console
	});
	
	alert("Hello");
}