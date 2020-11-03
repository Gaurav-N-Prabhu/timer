var counter = window.prompt("Enter the number in  secs : ");

setInterval( function()
{
    counter--;

    if( counter >= 0 )
    {
        id = document.getElementById("count");
        id.innerHTML = counter;
    }

    if( counter === 0 )
    {
        id.innerHTML = "COMPLETE";
    }
}, 1000);

