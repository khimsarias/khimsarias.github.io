const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
           navLinks.forEach((link,index) =>{
       if(link.style.animation) {
           link.style.animation=''
        } else {
            link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
        }
    });
        
    burger.classList.toggle('toggle');
    });
 
}
navSlide();
$(document).ready( function()
{
	$( '.buzz' ).each( function()
	{
		$( this ).attr( 'data-buzz' , $( this ).text() );
	} );
} );


function checkEnterClick(e){
    if(e.keyCode == 13){
    document.getElementById('btn_id').click();
    document.getElementById('cmd_id').blur();
    }
 }

 function closeAll()
 {
    window.close();
 }

function btn_clicked(){
    msg = document.getElementById('cmd_id').value;
    msg = msg.toLowerCase();
    console.log(msg)
    if (msg == "nox")
    {
        document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('cmd_id').value = '';
    }
    if (msg == "lumos")
    {
        document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('cmd_id').value = '';
    }    
    if (msg == "quit" || msg == 'exit' || msg == "avada kedavra")
    {
        closeAll();
    }
};
