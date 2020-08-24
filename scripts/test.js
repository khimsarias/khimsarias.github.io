let loop = 1;    var i = 0;
async function event_func(x)
{
    loop = 1;
    var moon = ['🌑', '🌘', '🌗', '🌖', '🌕','🌔','🌓','🌒','🌑'];
    // while (loop < 18)
    while (loop)
    {
        console.log(moon[i]);
        window.location.hash = '|-' + moon[i] + '-|';
        i++;
        loop++;
        if(i > 8)
        i = 0;
        await sleep(200);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
function stop_func()
{
    loop = 0;
}