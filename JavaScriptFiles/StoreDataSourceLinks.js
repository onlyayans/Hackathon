function launchBing() {
	window.location.href = "https://www.bing.com/";
}

function monitorFire() {
	window.location.href = "FireMonitoring.html";
}

function getNewsFeed() {
	window.location.href = "https://www.google.co.in/search?q=search+fire+in+india&oq=search+fire+in+india&aqs=chrome..69i57j69i64.4370j0j4&sourceid=chrome&ie=UTF-8#q=forest+fire+in+india";
}

function readPython() {
	$.ajax({
		url : "PythonFiles/hello.py",
		context: document.body
	}).done(function(o) {
		console.log(data);
		console.log(text);
	});
}

function ready() {
	$.getJSON( "JsonData/twitterResponse.json", function( data ) {
		  var items = [];
		  $.each( data, function( key, val ) {
		    items.push( "<li id='" + key + "'>" + val + "</li>" );
		  });
		 
		  $( "<ul/>", {
		    "class": "my-new-list",
		    html: items.join( "" )
		  }).appendTo( "body" );
		});
}

