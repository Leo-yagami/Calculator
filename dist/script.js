// Light dark mode switcher logic
const dayEl = document.querySelector('.day');
const nightEl = document.querySelector('.night');
const htmlEl = document.documentElement;
let operators = ['x', '÷', '%', '+', '-'];
dayEl.addEventListener('click', () =>{
    if(nightEl.classList.contains('fillInactive'))return;
    dayEl.classList.toggle('fillInactive');
    nightEl.classList.toggle('fillInactive');
    htmlEl.classList.remove('dark');
})
nightEl.addEventListener('click', () =>{
    if(dayEl.classList.contains('fillInactive'))return;
    dayEl.classList.toggle('fillInactive');
    nightEl.classList.toggle('fillInactive');
    htmlEl.classList.add('dark');

})

// Calculator logic
const btn1 = document.querySelector('.btn');
// Declaring the 3 variables
let operand1 = "", operand2 = "", operator;
//Declaring the refill-[rgba(115,117,122,0.70)]sutl
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
        if(!operand1 || operator){
            if(clickedData == '-'){
                document.querySelector('.display').textContent += clickedData;
                operationName += operand1? " " +clickedData: operand1;
                console.log(operationName);
            }
            if(operand1)
            operand2 = clickedData;
            else
            operand1 = clickedData;
            return;
        }
        operator = clickedData;
        document.querySelector('.display').textContent+= " " + clickedData + " ";
        console.log("The operator is: " + operator)
    }
    else if(clickedData == '='){
        console.log(operand1, operand2, operator)
        if(operand1 && operand2 && operator){
            if(operator == '%')result = Math.round(+operand1) % Math.round(+operand2);
            else if(operator == '-')result = (+operand1 - +operand2).toFixed(2);
            else if(operator == '+')result = (+operand1 + +operand2).toFixed(2);
            else if(operator == 'x')result = (+operand1 * +operand2).toFixed(2);
            else if(operator == '÷'){
                result = (+operand1 / +operand2).toFixed(2);
            }
                
        }
        operand1 = "";operand2 = "";
        document.querySelector('.result').textContent = result;
        result = null;
    }
    else if(Number.isInteger(+clickedData)){
        if(!operator){
            operand1 = operand1 == undefined? clickedData: operand1 + clickedData;
            operationName = operand1;
            document.querySelector('.display').textContent += +clickedData;
        }
        else{
            operand2 = operand2 == undefined? clickedData: operand2 + clickedData;
            operationName += operand2;
            document.querySelector('.display').textContent += +clickedData;
        } 
        console.log(operand1, operand2)
    }
    else if(clickedData == 'Ac'){
        document.querySelector('.result').textContent = "";
        operand1 = "";operand2 = "";
        document.querySelector('.display').textContent = "";
        operator = null;
    }
    else if(clickedData == "+/-"){
        console.log("Again")
        if(operand1){
            operand2 = operand2? '-' + operand2 : '-';
            return;
        }
        operand1 = '-' + operand1;
        // document.querySelector('.display').textContent = document.querySelector('.display').textContent.indexOf(operator);
    }
    else if(clickedData == "Del"){
        let text = document.querySelector('.display').textContent; 
        // Deletion logic
        if(text.length == 0)return;
        if(operators.includes(text[text.length] - 1))operator="";
        if('0' <= text[text.length] <= '9'){
            if(operand2)operand2 = operand2.slice(0, operand2.length - 1);
            else operand1 = operand1.slice(0, operand2.length - 1);
            console.log(operand1, operand2)
        }
        if(text[text.length-1] == " ")text.slice(0, text.length - 1)
        document.querySelector('.display').textContent = text.slice(0,text.length-1);
    }
    else{
        let text = document.querySelector('.display').textContent;
        if(text[text.length-1] == '.')return;
        if(operand1.includes('.')){
            if(operand2 && operand2.includes('.'))return;
            else if(operand)
        }
        if(operand2)operand2+='.'
        else operand1+='.'
        document.querySelector('.display').textContent += '.';
    }
});
