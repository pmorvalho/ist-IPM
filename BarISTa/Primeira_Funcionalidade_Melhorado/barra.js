var perc = 0;

function updateProgress(percentage) {
	$('#pbar_innerdiv').css("width", percentage + "%");
}

function animateUpdate(item) {
	perc++;
	updateProgress(perc);
	if(perc < 100) {
		setTimeout(function() { animateUpdate(item) }, 50);
	}
	else{
		$(item).fadeOut( 700 );
	}
}