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
    if (document.getElementsByClassName("burger")[0].classList.contains("toggle"))
    {
        for (let i = 5; i < document.getElementsByTagName("DIV").length; i++)
        {
            document.getElementsByTagName("DIV")[i].classList.add("blurall");
            document.getElementById("cmd_id").disabled = true;
            document.getElementById("btn_id").disabled = true;
            document.getElementById('cmd_id').value = '';
        }
        
    }
    else
    {
        for (let i = 5; i < document.getElementsByTagName("DIV").length; i++)
        {
            document.getElementsByTagName("DIV")[i].classList.remove("blurall");
            document.getElementById("cmd_id").disabled = false;
            document.getElementById("btn_id").disabled = false;
            document.getElementsByClassName("nav-links")[0].style.zIndex = "-2";
        }
    }
    // CLose Nav when clicked anywhere else
    
    if (document.getElementsByClassName("burger")[0].classList.contains("toggle"))
    {
        for (let i = 5; i < document.getElementsByTagName("DIV").length; i++)
        {
            document.getElementsByTagName("DIV")[i].addEventListener("click", () =>
            {
                if(document.getElementsByTagName("DIV")[i].classList.contains("blurall"))
                burger.click();
            })
        }   
    }
  

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


function themeLoader()
{
	if (localStorage.getItem("mode") == null)
	{
		localStorage.setItem("mode","light");
    	document.documentElement.setAttribute("data-theme", localStorage.getItem("mode"));
	}
    if(localStorage.getItem("mode") == "light")
    {
        document.documentElement.setAttribute('data-theme', 'light');
        try
        {
			container.removeAttribute("class", "flip");
        }
        catch{}
    }
    if (localStorage.getItem("mode") == "dark")
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("wand").setAttribute("style", "filter:invert(1)");
        document.getElementsByClassName("social")[0].setAttribute("style", "filter:invert(1)");
        try{
        container.setAttribute("class","flip");
        }
        catch{}
    }
}
$(document).keyup(function (e)
{
    if(e.keyCode == 13)
    {
        checkEnterClick(e);
    }
    if (e.shiftKey && e.keyCode === 67)
    {
        
        document.getElementById("cmd_id").focus(); 
    }
    if (e.keyCode == 27)
    {
        document.getElementById("cmd_id").blur();
    }
})
function checkEnterClick(e){
    if(e.keyCode == 13){
    document.getElementById('btn_id').click();
    document.getElementById('cmd_id').blur();
    }

 }
 function clear_content()
 {
    document.getElementById("cmd_id").value = "";
 }

function btn_clicked(){
    
    msg = document.getElementById('cmd_id').value;
    msg = msg.toLowerCase();
    msg = msg.trim();
    console.log(msg);
    document.getElementById('cmd_id').value = '';
    if (msg == "nox")
    {

        document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("mode", document.documentElement.getAttribute("data-theme"));
        
        document.getElementById("wand").setAttribute("style", "filter:invert(1)");
        document.getElementsByClassName("social")[0].setAttribute("style", "filter:invert(1)");
        try{container.setAttribute("class","flip");}catch{}
    }
    else if (msg == "lumos")
    {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("mode", document.documentElement.getAttribute("data-theme"));
        document.getElementById("wand").setAttribute("style", "filter:invert(0)");
        document.getElementsByClassName("social")[0].setAttribute("style", "filter:invert(0)");
            try{container.removeAttribute("class", "flip");}catch{}
    }    
    else if (msg == "help")
    {
        window.open('commands.txt','_blank');
    }
    else if (msg == "cd blogs" || msg == "cd blog")
    {
        window.open('pages/blogs.html','_self');
    }
    else if (msg == "cd about" || msg == "cd about me" || msg=="cd aboutme")
    {
        window.open('pages/aboutme.html','_self');
    }
    else if (msg == "cd /" || msg == "cd ~" || msg == "cd")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('index.html','_self');
        else
        window.open('../index.html','_self');
    }
    else if (msg == "cd -" || msg == "cd ..")
    {
        window.history.back();
    }
    else if (msg == "cd home" || msg == "accio home")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('index.html','_self');
        else
        window.open('../index.html','_self');
    }
    else if (msg == "cat 1" || msg == "accio 1")
    {
        blogLoader(1);
    }
    else if (msg == "cat 2" || msg == "accio 2")
    {
        blogLoader(2);
    }
    else if (msg == "cat 3" || msg == "accio 3")
    {
        blogLoader(3);
    }
    else if (msg == "cat 4" || msg == "accio 4")
    {
        blogLoader(4);
    }
    else if (msg == "cat 5" || msg == "accio 5")
    {
        blogLoader(5);
    }
    else if (msg == "cat 6"  || msg == "accio 6")
    {
        blogLoader(6);
    }
    else if (msg == "cat 7" || msg == "accio 7")
    {
        blogLoader(7);
    }
    else if (msg == "cat 8" || msg == "accio 8")
    {
        blogLoader(8);
    }
    else if (msg=="instagram" || msg == "accio instagram")
    {
        socialfunction('instagram')
    }
    else if (msg=="mail" || msg=="email" || msg=="e-mail" || msg=="accio mail" || msg=="accio email" || msg=="accio e-mail")
    {
        socialfunction('mail');
    }
    else if (msg=="twitter" || msg == "accio twitter")
    {
        socialfunction('twitter')
    }
    else if (msg=="linkedin" || msg == "accio linkedin")
    {
        socialfunction('linkedin')
    }
    else if (msg=="github" || msg == "accio github")
    {
        socialfunction('github')
    }
};

function scrollto(x)
{
	document.getElementById(x).scrollIntoView(true);
}
