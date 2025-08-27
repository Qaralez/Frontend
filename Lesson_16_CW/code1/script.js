function sum(num1, num2){
    console.log(arguments);
    console.log(num1, arguments[0]);
    console.log(num2, arguments[1])
}

sum();
sum(1);
sum(1,2);
sum(1,2,3,4, "qwe", "qwa");