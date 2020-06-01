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
		case 2: 
			window.open('blog2.html', '_self');
			break;
		case 3: 
			window.open('blog3.html', '_self');
			break;			
		case 4:
			window.open('blog4.html','_self');	
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
	console.log(blogs_names)
	console.log(blogs_picture)
	console.log(blogs_infos)
	console.log(blogs_dates)

}

function featured_blog()
{
	console.log("Feature Called");
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