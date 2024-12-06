
const btn1 = document.querySelector('.btn');
// Declaring the 3 variables
let operand1, operand2, operator;
//Declaring the resutl
let result;
// Operation statement variable
let operationName = "";
btn1.addEventListener('click', (e) =>{
    // Constructing the Calculator logic by having 3 variables 
    let clickedData = e.target.textContent;
    if(
        clickedData == '%' || 
        clickedData == '+' || 
        clickedData == '-' || 
        clickedData == '÷' ||
        clickedData == 'x'
    ){
        operator = clickedData;
        console.log("The operator is: " + operator)
    }
    else if(clickedData == '='){
        if(operand1 && operand2 && operator){
            if(operator == '%')result = Math.round(+operand1) % Math.round(+operand2);
            else if(operator == '-')result = +operand1 - +operand2;
            else if(operator == '+')result = +operand1 + +operand2;
            else if(operator == 'x')result = +operand1 * +operand2;
            else if(operator == '÷')result = +operand1 / +operand2;
        }
        document.querySelector('.result').textContent = result;
        operand1 = "";operand2 = "";result = null;
    }
    else if(Number.isInteger(+clickedData)){
        if(!operator){
            operand1 = operand1 == undefined? clickedData: operand1 + clickedData;
            operationName = operand1;
        }
        else{
            operand2 = operand2 == undefined? clickedData: operand2 + clickedData;
            operationName += operand2;
        } 
        console.log(operand1, operand2)
        document.querySelector('.display').textContext= operationName;
    }
    else if(clickedData == 'Ac'){
        document.querySelector('.result').textContent = "";
        operand1 = "";operand2 = "";
        operator = null;
    }
});
