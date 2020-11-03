var counter = window.prompt("Enter the number in  sec : ");

setInterval( function()
{
    counter--;

    if( counter >= 0 )
    {
        id = document.getElementById("count").innerHTML = counter;
		id = document.getElementById("sec").innerHTML = "sec";
    }
	if(counter == 0)
	{
		id = document.getElementById("count").innerHTML = "COMPLETE";
		id = document.getElementById("sec").innerHTML = "";
	}
}, 1000);
