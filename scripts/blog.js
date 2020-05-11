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

function blogsearch()
{
	let blogtitles = [];
	let bigstring = '';
	for(let i = 0; i < document.getElementsByClassName("blog").length;i++)
	{
		blogtitles.push('cat ' + document.getElementsByClassName("name")[i].innerText.toLowerCase());
		blogtitles.push('accio ' + document.getElementsByClassName("name")[i].innerText.toLowerCase());
		blogtitles.push(document.getElementsByClassName("name")[i].innerText.toLowerCase());
	}
	bigstring = blogtitles.toString();
	document.getElementById("cmd_id").setAttribute("data-list",bigstring);
	// console.log(document.getElementById("cmd_id").getAttribute("data-list"));
	// console.log(bigstring)
	document.getElementById("cmd_id").addEventListener('keyup', (e)=>{
	const searchString = e.target.value;
	// console.log(searchString);
	const filteredCharacters = blogtitles.filter(blogtitles =>
		{
			return blogtitles.includes(searchString);
		})
	// console.log(filteredCharacters);
});
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