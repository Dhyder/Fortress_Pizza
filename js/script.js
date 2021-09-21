function getPizzaSize(){
    let selectedSize = document.getElementById("pizza_size").value;
    return (selectedSize);
}
function getPizzaType(){
    let selectedType = document.getElementById("pizza_type").value;
    return parseInt(selectedType);
}
function toppingCount(){
    let selectedTopping = document.getElementById("toppings_type").value;
    return parseInt(selectedTopping);
}
function crustType(){
    let selectedCrust = document.getElementById("crust_type").value;
    return parseInt(selectedCrust);
}
function getNumber(){
    let totalPizzas = document.getElementById("add").value;
    return parseInt(totalPizzas);
}

function numberValidation(){
    let number = document.getElementById("add").value;
    if(number == "")
    swal("Please input field"," ", "error");
    return false;
} 
function pizzaLog(){
    let pizzaLog = (getPizzaType(""));
    document.getElementById("output1").value = pizzaLog + "/=";
    return true
}
function pizzaLog2(){
    let pizzaTopping = (toppingCount(""));
    document.getElementById("output2").value = pizzaTopping + "/=";
    return true
}
function pizzaLog3(){
    let pizzaCrust = (crustType(""));
    document.getElementById("output3").value = pizzaCrust + "/=";
    return true
}
function pizzaLog4(){
    let numberOfPizza = (getNumber());
    document.getElementById("output4").value = numberOfPizza + " "+ "full box(es)";
    return true
}