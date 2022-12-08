var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
//taking initial value
 inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

function myResult(){
    // when we change the input and output type value we need to update 
    //input typevalue and resulttypevalue 
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;
    //now compare the input and resulttype value and add fromula 
    if(inputTypeValue==="Decimal"&& resultTypeValue==="Hexadecimal"){
        var x = parseInt(input.value,10);
    result.value= Number(x).toString(16);
     
      
    }
    else if(inputTypeValue==="Decimal"&& resultTypeValue==="Octal"){
        var x = parseInt(input.value,10);
    result.value= Number(x).toString(8);
     

    }
    else if(inputTypeValue==="Decimal"&& resultTypeValue==="Binary"){
        var x = parseInt(input.value,10);
    result.value= Number(x).toString(2);
     

    }
    else if(inputTypeValue==="Decimal"&& resultTypeValue==="Decimal"){
        result.value=input.value;

}
if(inputTypeValue==="Hexadecimal"&& resultTypeValue==="Decimal"){
    var x = parseInt(input.value,16);
    result.value= Number(x).toString(10);
     
}
else if(inputTypeValue==="Hexadecimal"&& resultTypeValue==="Octal"){
    var x = parseInt(input.value,16);
    result.value= Number(x).toString(8);
     

}

else if(inputTypeValue==="Hexadecimal"&& resultTypeValue==="Hexadecimal"){
    result.value=input.value;
}
else if(inputTypeValue==="Hexadecimal"&& resultTypeValue==="Binary"){
    var x = parseInt(input.value,16);
    result.value= Number(x).toString(2);
     

}


if(inputTypeValue==="Octal"&& resultTypeValue==="Decimal"){
    var x = parseInt(input.value,8);
    result.value= Number(x).toString(10);
     
}
else if(inputTypeValue==="Octal"&& resultTypeValue==="Hexadecimal"){
    var x = parseInt(input.value,8);
    result.value= Number(x).toString(16);
     

}
else if(inputTypeValue==="Octal"&& resultTypeValue==="Octal"){
    result.value=input.value;


}
else if(inputTypeValue==="Octal"&& resultTypeValue==="Binary"){
    var x = parseInt(input.value,8);
    result.value= Number(x).toString(2);
     


}
if(inputTypeValue==="Binary"&& resultTypeValue==="Hexadecimal"){
    var x = parseInt(input.value,2);
    result.value= Number(x).toString(16);
}
else if(inputTypeValue==="Binary"&& resultTypeValue==="Decimal"){
    var x = parseInt(input.value,2);
    result.value= Number(x).toString(10);
     

}
else if(inputTypeValue==="Binary"&& resultTypeValue==="Octal"){
    var x = parseInt(input.value,2);
    result.value= Number(x).toString(8);

}
else if(inputTypeValue==="Binary"&& resultTypeValue==="Binary"){
    result.value=input.value;


}
}