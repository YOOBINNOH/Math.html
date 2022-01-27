function print(){

    var x = document.getElementById("input_number").value

    if (sosu(x)==true){

        document.write("소수 입니다.");

    }
    else{

        document.write("소수가 아닙니다.");
        
    }
    
}


function sosu(n){

    for(i=2; i<=Math.sqrt(n); i++){

        if(n%i==0){
            return false;
        }        

    }

    return true;



}

