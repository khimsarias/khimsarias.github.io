
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
    document.getElementsByClassName("nav-links")[0].style.zIndex = "3";
    // if (document.getElementsByClassName("burger")[0].classList.contains("toggle"))
    // {
    //     document.getElementsByClassName("execute")[0].style.zIndex = "0";
    //     document.getElementsByClassName("cmd_box")[0].style.zIndex = "-1";
    // }
    // else
    // {
    //     document.getElementsByClassName("execute")[0].style.zIndex = "2";
    //     document.getElementsByClassName("cmd_box")[0].style.zIndex = "2";
    // }
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
 

 async function displayImage(i)
 {
    document.getElementsByClassName("quitgif")[i].style.display = "block";  
    switch (i) {
    case 0 :
                await sleep (3760);
                break;
    case 1 :
        await sleep (1380);
        break;
}         
    document.getElementsByClassName("quitgif")[i].style.display = "none"; 
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
        container.setAttribute("class","flip");
        document.getElementById("wand").setAttribute("style", "filter:invert(1)");
        document.getElementById('cmd_id').value = '';
    }
   else if (msg == "lumos")
    {
        document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("wand").setAttribute("style", "filter:invert(0)");
        document.getElementById('cmd_id').value = '';
            container.removeAttribute("class", "flip");
    }    

    else if (msg == "avada kedavra")
    {
            displayImage(0);
        document.getElementById('cmd_id').value = '';
    }

    else if (msg == "morsmordre")
    {
        document.getElementById('cmd_id').value = '';
        displayImage(1);
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
