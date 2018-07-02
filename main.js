var name = 'jknfjksndjk gsndkjngsd g';
var name1 = 2551;
var name2 = 325.235236236;
var name3 = true;
var name4 = '\t';

var a = 14;
var b = 12.6;

var c = a + b;

var d = name3 + name3;

var f = (a==b);

var s = [1,2,35,5,547,568,7,5,3];

for(var i = 0; i < s.length; i++)  // цикл
{
    if(s[i]== 35)   // нашли 35 из массива данных 
        console.log(i);  // условие, чтобы вывести номер элемента 
}

var j = 0;
while(name[j]!=' ')  // бесконечный цикл, пишем его, если уверены, что условие выполнется 
{
    j++; // прибавляет значение к j
}


function Add(arg1,arg2)
{    
    return arg1 + arg2;  // присваевает значение Add, а потом это перехожит в res
}

function simple(arg1, next)
{
    if(arg1 == 12 )
        next();
}

simple(12, function() {
    console.log("KEK");
})


var res = Add(10,12);
console.log(res);

console.log(Add(10,12))
