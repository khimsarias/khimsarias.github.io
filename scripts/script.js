$(window).scroll(function() {
      if ($(this).scrollTop() > 1){
      $("HEADER").addClass('sticky');
      }
      else{
      $("HEADER").removeClass('sticky');
      }});

$( document ).ready( function()
{
	$( '.buzz' ).each( function()
	{
		$( this ).attr( 'data-buzz' , $( this ).text() );
	} );
} );