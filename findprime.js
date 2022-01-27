function print(){

    var x = document.getElementById("input_number").value

    for(i=2; i<=Math.sqrt(x); i++)
    {
        if (x%i == 0){
            document.write("소수가 아닙니다.");
            break;      }
            
        document.write("소수 입니다.");
        break;    

    }

}