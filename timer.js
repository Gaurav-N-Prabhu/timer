var counter = window.prompt("Enter the number(in seconds) : ");

setInterval( function()
{
    counter--;

    if( counter >= 0 )
    {
        id = document.getElementById("count").innerHTML = counter;
		id = document.getElementById("sec").innerHTML = "sec";
    }
    if(counter == -1)
    {
	id = document.getElementById("count").innerHTML = "COMPLETE";
	id = document.getElementById("sec").innerHTML = "";
    }
}, 1000);
