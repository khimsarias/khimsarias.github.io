function mailfunction()
{

}
function socialfunction(x)
{
    switch (x)
    {   
        case "mail" : 
        {
            navigator.clipboard.writeText('saumya27khimsaria@gmail.com');
            alert('Email Copied');
            break;
        }
        case "instagram" :
        {
            window.open('https://www.instagram.com/thesaumyakhimsaria/','_blank');
            break;
        }
        case "linkedin" :
        {
            alert("link is coming soon");
            break;
        }
        case "github" :
        {
            window.open('https://github.com/khimsarias','_blank')
            break;
        }
        case "twitter" :
        {
            alert("link is coming soon")
            break;
        }
    }
}