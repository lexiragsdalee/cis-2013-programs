var $ = function (id) 
{
    return document.getElementById(id);
};

doStuffComputer = function()
{
    //var counter = 0;
	//var output = "";
	
    for (intCounter = 1; intCounter <= 100; intCounter++)
    {
        if (intCounter%15 === 0)
        {
            //output = ("FizzBuzz\n");
            console.log("Fizzbuzz");
        }
        else if (intCounter%3 === 0)
        {
            //output = ("Fizz\n");
            console.log("Fizz");
        }
        else if (intCounter%5 === 0)
        {
            //output = ("Buzz\n");
            console.log("Buzz");
        }
        else
        {
            //output = counter++;
            console.log(intCounter);
        }
    }
	
};



window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
};