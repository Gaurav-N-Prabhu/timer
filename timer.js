var counter = 60;

setInterval( function()
{
    counter--;

    if( counter >= 0 )
    {
        id = document.getElementById("count");
        id.innerHTML = counter+"-"+"sec";
    }

    if( counter === 0 )
    {
        id.innerHTML = "COMPLETE";
    }
}, 1000);
