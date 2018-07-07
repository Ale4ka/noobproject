var fact = 1;

for (var j = 6; j > 0; j--)
{
    fact = fact * j;
}

var res = fuct(6);

function fuct(a)
{
    if(a == 1) 
        return 1;
    else
        return a * fuct(a-1);
}


console.log(res);