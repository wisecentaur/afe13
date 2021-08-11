
function operationResult(){
    let inputResult = document.getElementById("result")
    let selectOperation = document.getElementById("selectOperation").value;
    let a = document.getElementById('aNumber').value;
    let b = document.getElementById('bNumber').value;
    
    inputResult.value =  eval(a + selectOperation + b);
}