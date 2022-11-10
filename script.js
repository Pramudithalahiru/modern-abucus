



function calculate(){
    //get data from form
    var number1=document.forms["f1"]["num1"].value;
    var number2=document.forms["f1"]["num2"].value;
    var operator=document.forms["f1"]["op"].value;
//write operations
switch(operator){
    case '+':
        alert(number1+number2);
     break
    case '-':
        alert(number1-number2);
        break
    case 'x':
        alert(number1*number2);
        break
    case '/':
        alert(number1/number2);
        break
       
}

   
}
    