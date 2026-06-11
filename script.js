const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function sin(){
    display.value = Math.sin(Number(display.value));
}

function cos(){
    display.value = Math.cos(Number(display.value));
}

function tan(){
    display.value = Math.tan(Number(display.value));
}

function sqrt(){
    display.value = Math.sqrt(Number(display.value));
}