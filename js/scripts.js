
$(document).ready(function(){

	toggleModules();
	normalise5050Column();
	submitButtonEvent();

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

function submitButtonEvent(){

	$('.submit-button').click(function(){

		var $value = $('input#offer').val();
		$('.submit-offer p.error').remove();

		if( $.isNumeric( $value) && $value > 0 ){

			// output price to console
			var priceObj = { 'price' : $value }


			console.log(priceObj);

		}
		else{
			
			$('input#offer').parent().after('<p class="error">Please submit a valid number</p>');

		}
		return false;

	});


}

			