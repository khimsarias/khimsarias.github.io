var blog_array= [];
function blogLoader(x)
{
	x-=1;
	switch (x)
	{
		case 0: window.open('blog-template.html','_self');	
	}
}

function blogSort()
{
	for(let i = 0; i < document.getElementsByClassName("number").length; i++)
	{
		blog_array.push(document.getElementsByClassName('number')[i]);
		document.getElementsByClassName("number")[i].innerHTML = i+1 + '. ';
	}
}	