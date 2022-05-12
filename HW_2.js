//  Task______________________________________________________________

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой
//  ______________________________________________________________
let anystring = "1Qrt@";


checkString(anystring);
function checkString(str) {
  if (typeof str != 'string') {
    console.log("Argument is not a string");
    return;
}    
let isValid = true;
  if (str.length < 5) {
    isValid = false;
    console.log("You have to type more than 5 symbols");
    return;
} 
  if (str.length > 64) {
    isValid = false;
    console.log("You can not type more than 64 symbols");
} 
  if (!str.includes("@")) {
    isValid = false;
    console.log("You have to type min 1 @ in this form");
}      
  if (!/[0-9]/.test(str)) {
    isValid = false;
    console.log("You have to type min 1 digit in this form");
}
  if (!/[a-z]/.test(str)) {
    isValid = false;
    console.log("You have to type min 1 letter in this form");
}
  if (!/[A-Z]/.test(str)) {
    isValid = false;
    console.log("You have to type min 1 letter in uppercase in this form");
}
  if (str.length == 0) {
    isValid = false;
    console.log("This form can not be empty");
} 
  if (!/[^\s]/gim.test(str)) {
    isValid = false;
    console.log("This string can not contain only speces");
}

  if (isValid) {
    console.log("Welcome home!");
}
        
}