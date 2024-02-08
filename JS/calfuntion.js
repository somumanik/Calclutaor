
const display = document.querySelector('#inputText');



function appendToDisplay(input)
{
    
    display.value += input;

}

function clearDisplay()
{
  display.value = "";
}

function Calculation()
{
    display.value = eval(display.value);
}



function backForward()
    {
            let value =document.querySelector('#inputText').value;
            document.querySelector('#inputText').value = value.substr(0, value.length - 1);
          
    }
