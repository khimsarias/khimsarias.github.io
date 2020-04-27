var blog_array= [];
var temp_array = [];
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
	alert(document.getElementsByClassName("date_time")[0].getElementsByTagName('SPAN')[0].innerHTML);
	for(let i = 0; i < document.getElementsByClassName("number").length; i++)
	{
		blog_array.push(document.getElementsByClassName('number')[i]);
		temp_array.push(document.getElementsByClassName("blog")[i].getAttribute("id"));
		document.getElementsByClassName("number")[i].innerHTML = i+1 + '. ';
	}
	// alert('Before Sort: ' + temp_array);
	temp_array.sort();
	// alert('After Sort: ' + temp_array);
}	

function dateSort()
{
	var date_array = [];
	for(let i = 0; i < document.getElementsByClassName("number").length; i++)
	{
	}
}