function calculator(bill){
    
    var tip;
    if(bill<50)
    {
        tip=(bill*0.2);
        return tip;
    }
    else if(bill>=50 && bill<=200)
    {
        tip=(bill*0.15);
        return tip;
    }
    else{
        tip=(bill*0.10);
        return tip;
    }
}
console.log(calculator(124));
console.log(calculator(48));
console.log(calculator(268));