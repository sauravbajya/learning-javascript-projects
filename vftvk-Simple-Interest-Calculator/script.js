function checkAmt(){ 
    var p=document.getElementById("principal").value;
    if(isNaN(p)){
        document.getElementById("NaN").innerHTML = "  SHOULD BE IN NUMBERS";
        document.getElementById("btn").disabled = true;
    }else{
        document.getElementById("NaN").innerHTML = "";
        document.getElementById("btn").disabled = false;
    }

}
function rangeHandler(){
    var r=document.getElementById("rate").value;
    document.getElementById("rangeShow").innerHTML = r+"%";
}
function compute(){
    var principal = document.getElementById("principal").value;
    var time = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var SI=(principal*time*rate)/100;
    var d= new Date();
    var now=d.getFullYear();
    var amount = +principal + +SI;
    var y= +time + +now;
    document.getElementById("result").innerHTML =`If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${amount}</mark>,<br>
    in the year <mark>${y}</mark>.`;
}