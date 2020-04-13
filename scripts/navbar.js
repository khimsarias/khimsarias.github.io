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

 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
 async function closeAll()
 {
    await sleep (3760);
    window.close();
 }
// All Display Functions for GIFs
 
function displayImage()
 {
     document.getElementsByClassName("quitgif")[0].style.display = "block";  
 }

 async function displayImage1()
 {
     document.getElementsByClassName("quitgif")[1].style.display = "block";  
     await sleep (1380);
     document.getElementsByClassName("quitgif")[1].style.display = "none"; 
 }

// All Display Functions for GIFs

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
   else if (msg == "lumos")
    {
        document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('cmd_id').value = '';
    }    

    else if (msg == "quit" || msg == 'exit' || msg == "avada kedavra")
    {

        if (msg == "avada kedavra")
        {
            displayImage();
            closeAll();
        }
        else
        {
            window.close();
        }
        document.getElementById('cmd_id').value = '';
    }

    else if (msg == "morsmordre")
    {
        document.getElementById('cmd_id').value = '';
        displayImage1();
    }

   else  if (msg == "reducio")
    {
        document.getElementById('cmd_id').value = '';
        if (document.body.style.zoom > 1.0)
        {
            document.body.style.zoom=1.0;this.blur();
        }
        else
        {
            document.body.style.zoom=0.2;this.blur();
        }
    }

    else if (msg == "engorgio")
    {
        document.getElementById('cmd_id').value = '';
        if (document.body.style.zoom < 1.0)
        {
        document.body.style.zoom=1.0;this.blur();
        }
        else
        {
            document.body.style.zoom=1.5;this.blur();
        }

    }
};
