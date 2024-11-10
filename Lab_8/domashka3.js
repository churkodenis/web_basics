// Унарні оператори
let a = 5;

let positive = +a; 
let negative = -a; 

a++;                
a--;              

let isTrue = !false;  

let invertedBits = ~a;
let typeOfA = typeof a;

let obj = {name:"Vlad"}

delete obj.name;

// Бінарні оператори
let x = 10;
let y = 3;

let sum = x + y;         
let difference = x - y;  
let product = x * y;    
let quotient = x / y;    
let remainder = x % y;  
let exponentiation = x ** y;
let isEqual = x == y;      
let isNotEqual = x != y;   
let isGreater = x > y;     
let isGreaterOrEqual = x >= y;  

let isTrueAndFalse = true && false; 
let isTrueOrFalse = true || false;  


// Тернарні оператори
let age = 18;
let message = age >= 18 ? "Повнолітній" : "Неповнолітній"; 

let score = 85;
let grade = score > 90 ? "Відмінно" :
            score > 75 ? "Добре" :
            score > 50 ? "Задовільно" : "Незадовільно";  

console.log(message, grade);


// Використання методу concat
let line1 = "Нехай завжди буде сонце,";
let line2 = "Нехай завжди буде небо,";
let line3 = "Нехай завжди буде мама,";
let line4 = "Нехай завжди буду я.";

let poem = line1.concat("\n", line2, "\n", line3, "\n", line4);

console.log(poem);
