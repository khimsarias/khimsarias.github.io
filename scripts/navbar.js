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
    let winheight = window.innerHeight;
    let winwidth = window.innerWidth;
    console.log(winheight);
    console.log(winwidth)
    
    document.body.classList.add("fade_anim");
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
        for (let i=0; i < document.getElementsByClassName("audiocontrol").length;i++)
        {
            document.getElementsByClassName("audiocontrol")[i].setAttribute("style","filter:invert(0)");
        }
        try{document.getElementsByClassName("social")[0].setAttribute("style", "filter:invert(0)");}catch{}

    }
    if (localStorage.getItem("mode") == "dark")
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("wand").setAttribute("style", "filter:invert(1)");
        try{
        container.setAttribute("class","flip");
        }
        catch{}
        for (let i=0; i < document.getElementsByClassName("audiocontrol").length;i++)
        {
            document.getElementsByClassName("audiocontrol")[i].setAttribute("style","filter:invert(1)");
        }
       try{ document.getElementsByClassName("social")[0].setAttribute("style", "filter:invert(1)");}catch{}

        

    }
}
$(document).keyup(function (e)
{
    if(e.keyCode == 13)
    {
        document.getElementById('btn_id').click();
        document.getElementById('cmd_id').blur();
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

 function clear_content()
 {
    document.getElementById("cmd_id").value = "";
    for (let i = 7; i < document.getElementsByTagName("DIV").length; i++)
    {
        document.getElementsByTagName("DIV")[i].classList.add("blurall");
    }        
    $( ".selector" ).autocomplete( "enable" );
 }

 function remove_blur()
 {
    for (let i = 7; i < document.getElementsByTagName("DIV").length; i++)
    {
        document.getElementsByTagName("DIV")[i].classList.remove("blurall");
    }
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
            try{
                container.setAttribute("class","flip");
                }
                catch{}
                for (let i=0; i < document.getElementsByClassName("audiocontrol").length;i++)
                {
                    document.getElementsByClassName("audiocontrol")[i].setAttribute("style","filter:invert(1)");
                }
                try{document.getElementsByClassName("social")[0].setAttribute("style", "filter:invert(1)");}catch{}
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
        try
        {
            container.removeAttribute("class", "flip");
        }
        catch{}
        for (let i=0; i < document.getElementsByClassName("audiocontrol").length;i++)
        {
            document.getElementsByClassName("audiocontrol")[i].setAttribute("style","filter:invert(0)");
        }
        try{document.getElementsByClassName("social")[0].setAttribute("style", "filter:invert(0)");}catch{}
    }
    else if (msg == "rtd")    
    {
        try
        {
            featured_project();
        }
        catch{}

        try
        {
            featured_blog();
        }
        catch{}
    }
    else if (msg == "help")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('commands.txt','_blank');
        else
        window.open('../commands.txt','_blank');
    }
    else if (msg == "cd blogs" || msg == "cd blog" || msg == "accio blogs" || msg == "accio blog")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('pages/blogs.html','_self');
        else
        window.open('blogs.html','_self')
    }
    else if (msg == "cd about" || msg == "cd about me" || msg=="cd aboutme" || msg == "accio about" || msg == "accio about me" || msg=="accio aboutme")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('pages/aboutme.html','_self');
        else
        window.open('aboutme.html','_self');
    }
    else if (msg == "cd project" || msg == "cd projects" || msg == "accio projects" || msg == "accio project")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('pages/projects.html','_self');
        else
        window.open('projects.html','_self')
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
    else if (msg == "cat featured" || msg == "accio featured" || msg == "cat 0" || msg == "accio 0")
    {
        document.getElementsByClassName('featured_article')[0].click();
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
    else if (msg=="steam" || msg == "accio steam")
    {
        socialfunction('steam')
    }
    else if (msg == `resume`)
    {
        socialfunction(`resume`);
    }
    else if (msg == "share")
    {
        navigator.clipboard.writeText(window.location.href);
        alert("Page URL copied.");
    }
    else if (msg == "test")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('pages/test.html','_self');
        else
        window.open('test.html','_self');
    }
    else if (msg == "photos" || msg== "photo")
    {
        if(document.title == "Saumya Khimsaria")
        window.open('pages/photography.html','_self');
        else
        window.open('photography.html','_self')
    }
    else
    {
        if (msg !== ""){
        console.log("incorrect commmand");
        // document.getElementById("invalid").play();
        document.getElementById("cmd_id").value = `I'm sorry! That command/spell is either incorrect or not supported yet!`;
        }
    }
};

// $(function () {

//     var $win = $(window);
//     let mid = window.innerHeight*1.3;
//     $win.scroll(function () {
//         if ($win.scrollTop() > mid){
//             document.getElementsByClassName(`scrolltotop`)[0].style.display = "block";
//             document.getElementsByClassName(`scrolltotop`)[0].classList.add("fade_anim");
//             document.getElementsByClassName(`scrolltotop`)[0].classList.remove("fade_anim_back");
//             // document.getElementsByClassName(`scrolltotop`)[0].addAttribute(`onclick`);
//             document.getElementsByClassName(`scrolltotop`)[0].setAttribute(`onclick`,`scrollto('anchor')`);
//             document.getElementsByClassName(`scrolltotop`)[0].style.cursor = "pointer";
//             // document.getElementsByClassName(`scrolltotop`)[0].style.animation=`bounce 1.5s infinite`;
//         }
//         else if ($win.scrollTop() < mid){
//             document.getElementsByClassName(`scrolltotop`)[0].classList.add("fade_anim_back");
//             document.getElementsByClassName(`scrolltotop`)[0].classList.remove("fade_anim");
//             document.getElementsByClassName(`scrolltotop`)[0].setAttribute(`onclick`,``);
//             document.getElementsByClassName(`scrolltotop`)[0].style.cursor = "default";
//             // document.getElementsByClassName(`scrolltotop`)[0].style.animation=`bounce 0s infinite`;
//         }
//         }
//     );
// });

function scrollto(x)
{
	document.getElementById(x).scrollIntoView(true);
}

function email_client()
{
    window.open(`mailto:saumya27khimsaria@gmail.com`);
}

function close_popup()
{
    try{
        document.getElementsByClassName("email_popup")[0].classList.remove("popup_class");
        document.getElementsByClassName("email_popup")[0].classList.add("popup_close");
        for (let i = 5; i < document.getElementsByTagName("DIV").length; i++)
            {
                if(!document.getElementsByTagName("DIV")[i].classList.contains("email_popup")){
                document.getElementsByTagName("DIV")[i].classList.remove("blurall");}
            } 
    }
    catch{}
}

function socialfunction(x)
{
    switch (x)
    {   
        case "mail" : 
        {
            navigator.clipboard.writeText('saumya27khimsaria@gmail.com');
            
            try{
                document.getElementsByClassName("email_popup")[0].classList.add("popup_class");
                document.getElementsByClassName("email_popup")[0].classList.remove("popup_close");
            }
            catch{}
        if (document.getElementsByClassName("email_popup")[0].classList.contains("popup_class"))
        {
            for (let i = 5; i < document.getElementsByTagName("DIV").length; i++)
            {
                if(!document.getElementsByTagName("DIV")[i].classList.contains("email_popup")){
                document.getElementsByTagName("DIV")[i].classList.add("blurall");}
            } 
            // alert('Email Copied');
            break;
        }
    }
        case "instagram" :
        {
            window.open('https://www.instagram.com/thesaumyakhimsaria/','_blank');
            break;
        }
        case "linkedin" :
        {
            window.open(`https://www.linkedin.com/in/saumya-khimsaria-8905661b5/`,`_blank`);
            break;
        }
        case "github" :
        {
            window.open('https://github.com/khimsarias','_blank');
            break;
        }
        case "twitter" :
        {
            window.open(`https://twitter.com/KhimsariaSaumya`,`_blank`);
            break;
        }
        case "steam" :
        {
            window.open(`https://steamcommunity.com/id/Saumya27/`, `_blank`);
            break;
        }
        case "resume" :
        {
            if(document.title == "Saumya Khimsaria")
            window.open(`pages/resume.pdf`,'_blank');
            else
            window.open(`resume.pdf`,'_blank');
            break;
        }
    }
}