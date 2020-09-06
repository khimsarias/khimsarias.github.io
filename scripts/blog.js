let blogs_names = ["ignore"];
let blogs_picture = ["ignore"];
let blogs_infos = ["ignore"];
let blogs_dates = ["ignore"];
function blogLoader(x)
{
	switch (x)
	{
		case 1: 
			window.open('blog1.html','_self');	
			break;
		default:
			window.open('comingsoon.html','_blank');	
			break;
	}
}

function blogFilter(x) // Potential Update - Change Grid Values to eliminate extra space and numbering
{
	switch (x)
	{
		case 1: // Just for fun - jff
			for(let i = 0; i < document.getElementsByClassName("blog").length; i++)
			{
				document.getElementsByClassName("blog")[i].style.display = "none";
			
				setTimeout(() => {
					// if(document.getElementsByClassName("blog")[i].getAttribute("data-genre") == "jff")
					if(document.getElementsByClassName("blog")[i].getAttribute("data-genre").includes("jff"))
				{
					document.getElementsByClassName("blog")[i].style.display = "grid";
				}
				}, 150);
			}	
			break;
		case 2: // Lifestyle - life
			for(let i = 0; i < document.getElementsByClassName("blog").length; i++)
			{
				document.getElementsByClassName("blog")[i].style.display = "none";
			
				setTimeout(() => {
					if(document.getElementsByClassName("blog")[i].getAttribute("data-genre").includes("life"))
				{
					document.getElementsByClassName("blog")[i].style.display = "grid";
				}
				}, 150);
			}	
			break;
		case 3: // Academic - academic
			for(let i = 0; i < document.getElementsByClassName("blog").length; i++)
			{
				document.getElementsByClassName("blog")[i].style.display = "none";
			
				setTimeout(() => {
					if(document.getElementsByClassName("blog")[i].getAttribute("data-genre").includes("academic"))
				{
					document.getElementsByClassName("blog")[i].style.display = "grid";
				}
				}, 150);
			}	
			break;
		default:
			for(let i = 0; i < document.getElementsByClassName("blog").length; i++)
			{
				document.getElementsByClassName("blog")[i].style.display = "none";
			
				setTimeout(() => {
				
					document.getElementsByClassName("blog")[i].style.display = "grid";
				
				}, 150);
			}		
			break;
	}
}

function info_generator()
{
	for(let i = 0; i < document.getElementsByClassName("blog").length; i++)
	{
		document.getElementsByClassName("blog")[i].classList.add("fade_anim");
		blogs_names[i+1] = document.getElementsByClassName("name")[i].innerText.toString();
		blogs_picture[i+1] = "url(" + document.getElementsByTagName("IMG")[i+1].src.toString() + ")";
		blogs_infos[i+1] = document.getElementsByClassName("blog_info")[i].innerText.toString();
		blogs_dates[i+1] = document.getElementsByClassName("date_time")[i].innerText.toString();
	}
}

$(function () {

    var $win = $(window);
    let mid = window.innerHeight*1.3;
    $win.scroll(function () {
        if ($win.scrollTop() > mid){
            document.getElementsByClassName(`scrolltotop`)[0].style.display = "block";
            document.getElementsByClassName(`scrolltotop`)[0].classList.add("fade_anim");
            document.getElementsByClassName(`scrolltotop`)[0].classList.remove("fade_anim_back");
            // document.getElementsByClassName(`scrolltotop`)[0].addAttribute(`onclick`);
            document.getElementsByClassName(`scrolltotop`)[0].setAttribute(`onclick`,`scrollto('anchor')`);
            document.getElementsByClassName(`scrolltotop`)[0].style.cursor = "pointer";
        }
        else if ($win.scrollTop() < mid){
			document.getElementsByClassName(`scrolltotop`)[0].style.display = "none";
            document.getElementsByClassName(`scrolltotop`)[0].classList.add("fade_anim_back");
            document.getElementsByClassName(`scrolltotop`)[0].classList.remove("fade_anim");
            document.getElementsByClassName(`scrolltotop`)[0].setAttribute(`onclick`,``);
			document.getElementsByClassName(`scrolltotop`)[0].style.cursor = "default";
        }
        }
    );
});

function featured_blog()
{
	let article = document.getElementsByClassName('featured_article')[0];
	article.classList.add("fade_anim");
	let random = Math.floor((Math.random() * document.getElementsByClassName("blog").length) + 1);

	article.getElementsByTagName("SPAN")[1].innerHTML = blogs_names[random];
	article.getElementsByTagName("SPAN")[2].innerHTML = blogs_infos[random];
	article.getElementsByTagName("SPAN")[3].innerHTML = blogs_dates[random];
	article.style.backgroundImage = blogs_picture[random];
	article.addEventListener('click', function (){
		blogLoader(random);
	});
	setTimeout(() => {
		article.classList.remove("fade_anim");
	}, 2000);
	// article.classList.remove("fade_anim");
}

function numbering_blogs()
{
	for(let i = 0; i < document.getElementsByClassName("number").length; i++)
	{
			document.getElementsByClassName("number")[i].innerHTML = i+1 + '. ';
	}
}	
	

function comment_submit()
{
	alert("Feature coming soon");
}

function comment_cancel()
{
	document.getElementsByClassName("comment")[0].value = "";

}

function share_link()
{
	navigator.clipboard.writeText(window.location.href);
        alert("Page URL copied.");
}
