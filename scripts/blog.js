
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
	}
}

function numbering_blogs()
{
	for(let i = 0; i < document.getElementsByClassName("number").length; i++)
	{
		document.getElementsByClassName("number")[i].innerHTML = i+1 + '. ';
	}
}	

