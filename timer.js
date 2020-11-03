var counter = window.prompt("Enter the number in  secs : ");

setInterval( function()
{
    counter--;

    if( counter >= 0 )
    {
        id = document.getElementById("count").innerHTML = counter;
        id = document.getElementById("sec").innerHTML = "sec";
    }
}, 1000);
