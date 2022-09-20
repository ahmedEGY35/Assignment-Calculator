let ac = document.getElementById("ac");
let display = document.getElementById("FN");
function showData(Number){
    display.value += Number;
};
function cac(){
    display.value = "";
};
function calc(){
    let Result = math.evaluate(display.value);
    display.value = Result;
}