var number;
checkNumberType(0);

function checkNumberType(number)
{
    if(number>0)
    {
        console.log("number is greater than 0");
    }
    else if(number<0)
    {
        console.log("number is less than 0");
    }
    else if(number == 0)
    {
        console.log("number is 0");
    }
}