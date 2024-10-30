jQuery(document).ready(function($) {
    $('#colorpicker').hide();
    $('#colorpicker').farbtastic('#ijmtb_bg_colour');


    $('#ijmtb_bg_colour').click(function() {
        $('#colorpicker').fadeIn();
    });

    $(document).mousedown(function() {
        $('#colorpicker').each(function() {
            var display = $(this).css('display');
            if ( display == 'block' )
                $(this).fadeOut();
        });
    });
	
	

	$('#colorpicker2').hide();
	$('#colorpicker2').farbtastic('#ijmtb_text_colour');
	
	$('#ijmtb_text_colour').click(function() {
        $('#colorpicker2').fadeIn();
    });
	$(document).mousedown(function() {
        $('#colorpicker2').each(function() {
            var display = $(this).css('display');
            if ( display == 'block' )
                $(this).fadeOut();
        });
    });
	
});