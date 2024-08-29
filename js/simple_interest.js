document.querySelector("#submit").addEventListener("click",()=>{
    p=document.getElementById("input1").value;
    t=document.getElementById("input2").value;
    r=document.getElementById("input3").value;
    result=(p*t*r)/100
    if (result==0){
        document.getElementById("notification").style.visibility="visible";
        document.getElementById("result").innerHTML="";

    }
    else{
        document.getElementById("notification").style.visibility="hidden";
        document.getElementById("result").innerHTML=result;
    }
})