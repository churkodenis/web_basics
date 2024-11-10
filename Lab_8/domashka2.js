//1
var foo = 1; 
function bar() { 
    if (!foo) { 
        var foo = 10; 
    } 
    alert(foo); 
} 
bar();

//2
var n = 1; 
function b() { 
    n = 10; 
    return; 
    function n() {} 
} 
b(); 
console.log(n);

