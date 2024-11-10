//1 лекція
//1. Вивести всі види змінних з їх типами. Як мінімум мають бути об'єкт, масив, рядок, число, функція. //var varString...

//прості змінні
let string = "1"; //рядок
let number = 1; //цифра
let Boolean = true; //булева 

console.log(string)
console.log(number)
console.log(Boolean)

//об'єкт
let myCat = new Object();

myCat.name = "Sonya"
myCat.make = "happy"
myCat.breed = "Scottish"

//масив
const Array = ["кішка по імені Соня", "кішка по імені Люся", "кіт по імені Хома"]

console.log(Array[0])
console.log(Array[1])
console.log(Array[2])

//функція
function getCat(){
    console.log(myCat.name)
    console.log(myCat.breed)
    console.log(myCat.make)
    m(); //виклик функції "годуємо братів наших менших"
}
//функція через обьяву константи
const m = function(){ 
    console.log("Годуємо братів наших менших")
}

getCat() //виклик функції 


//2. Для рядка і числа поміняти значення так, щоб їх типи помінялися.
console.log("ТЕПЕР ВИВЕДЕМ НОВІ ПОМІНЯНІ ЧИСЛА")
let newstring = number; //присвоюєм раніше створену змінну з числом 1 нашой новой змінній newstring
let newnumber = string; //так само тільки з рядком

function getNewVariable(){ //виводимо значення через функцію 
    console.log(newstring) 
    console.log(newnumber)   
}
getNewVariable() //виклик функції


//3. Порівняти між собою рядок і число з "однаковими" значеннями.
if(string == number){
    console.log("Порівняння з двума дорівнює що є нестрогим, і просто перевіряє значення змінної")
}
if(string === number){
    console.log("Порівняння з ТРЬОМА знаками = що є вже приведенням типів і це означає що перевіряється і тип")
}



//4. Простими способами зашифрувати / дешифрувати числову інформацію

function encryptCaesar(numbers, shift) {
    return numbers.map(num => num + shift);
}

function decryptCaesar(encryptedNumbers, shift) {
    return encryptedNumbers.map(num => num - shift);
}

function encryptMultiply(numbers, factor) {
    return numbers.map(num => num * factor);
}

function decryptMultiply(encryptedNumbers, factor) {
    return encryptedNumbers.map(num => num / factor);
}

function encryptXOR(numbers, key) {
    return numbers.map(num => num ^ key);
}

function decryptXOR(encryptedNumbers, key) {
    return encryptedNumbers.map(num => num ^ key);
}

//Приклад використання
const originalNumbers = [1, 2, 3];
const shift = 3;
const factor = 2;
const key = 10;

//Шифрування
const caesarEncrypted = encryptCaesar(originalNumbers, shift);
const multiplyEncrypted = encryptMultiply(originalNumbers, factor);
const xorEncrypted = encryptXOR(originalNumbers, key);

console.log("Зашифровані числа через Caesar Cipher:", caesarEncrypted); // [4, 5, 6]
console.log("Зашифровані числа через множення:", multiplyEncrypted); // [2, 4, 6]
console.log("Зашифровані числа через XOR:", xorEncrypted); // [11, 12, 13]

//Дешифрування
const caesarDecrypted = decryptCaesar(caesarEncrypted, shift);
const multiplyDecrypted = decryptMultiply(multiplyEncrypted, factor);
const xorDecrypted = decryptXOR(xorEncrypted, key);

console.log("Дешифровані числа через Caesar Cipher:", caesarDecrypted); // [1, 2, 3]
console.log("Дешифровані числа через множення:", multiplyDecrypted); // [1, 2, 3]
console.log("Дешифровані числа через XOR:", xorDecrypted); // [1, 2, 3]