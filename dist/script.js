// Light dark mode switcher logic
const dayEl = document.querySelector('.day');
const nightEl = document.querySelector('.night');
const htmlEl = document.documentElement;
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
let operand1, operand2, operator;
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
        if(!operand1){
            if(clickedData == '-')document.querySelector('.display').textContent = clickedData;
            operand1 = clickedData;
            return;
        }
        if(operator)return;
        operator = clickedData;
        document.querySelector('.display').textContent+= " " + clickedData + " ";
        console.log("The operator is: " + operator)
    }
    else if(clickedData == '='){
        console.log(operand1, operand2, operator)
        if(operand1 && operand2 && operator){
            if(operator == '%')result = Math.round(+operand1) % Math.round(+operand2);
            else if(operator == '-')result = +operand1 - +operand2;
            else if(operator == '+')result = +operand1 + +operand2;
            else if(operator == 'x')result = +operand1 * +operand2;
            else if(operator == '÷'){
                result = (+operand1 / +operand2);
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
});
