function print(){

    var x = document.getElementById("input_number").value;
    

    for(i=2; i<x; i++){
        if (sosu(i)==true){
            document.write(i);
        }
        

    }

}

function sosu(n){

    for(i=2; i<=Math.sqrt(n); i++){
        if (n%i ==0){
            return false;
        }
    
        return true;
    }


}