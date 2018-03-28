$(document).ready(function() {
	// all code goes here
		$('#query').on("keypress", function(event){
			if (event.which == 13) {
				var query = this.value;
				console.log(query);
		}
	});
});

