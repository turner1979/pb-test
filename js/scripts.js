
$(document).ready(function(){

	toggleModules();
	normalise5050Column();

});

function toggleModules(){
	
	$('div.module a.toggle').click(function(){

		$module = $(this).parents('.module');

		if($module.hasClass('open')){
			$module.removeClass('open');
			$(this).html('show');
		}
		else{
			$module.addClass('open');
			$(this).html('hide');
		}

		return false;

	});


}

function normalise5050Column(){

	var height = 0;
	$('.buyers-offer, .response').each(function(){
		if( $(this).height() > height){
			height = $(this).height();
		}
		$('.buyers-offer, .response').height(height);
	});

}

			