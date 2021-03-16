function scrollto(x)
{
    console.log(x);
	document.getElementById(x).scrollIntoView(true);
}

function base()
{
    rt = document.getElementById("right");
    lt = document.getElementById("left");
    
}
function rightscroll()
{
    console.log("Right")
    rt.addEventListener("scroll", (e2))
}
function rightscrollstop()
{
    rt.removeEventListener("scroll", (e2))
}
function leftscroll()
{
    console.log("Left")
    lt.addEventListener("scroll", (e1))
}

function leftscrollstop()
{
    lt.removeEventListener("scroll", (e1))
}
function e2()
{
    lt.scroll(0,-rt.scrollTop)    
        // console.log(rt.scrollTop)
}
function e1()
{
    rt.scroll(0,-lt.scrollTop)
}