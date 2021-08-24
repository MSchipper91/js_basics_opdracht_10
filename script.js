const age = function(number) {
    console.log("Calling 'age' function..");
    console.log(number);
    if(number >= 18) {
        return "True";
    } else {
        return "False";
    }

};

const sayHello = function(number) {
    console.log("Calling 'sayHello' function..")
    const ageValue = age(number);
    console.log(ageValue)
    if(ageValue == "True") {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
    
};

console.log(sayHello(15));
console.log(sayHello(30));






const vatCalc = function(number) {
    console.log("Calling vatCalc function...");
    console.log(number)
    const vat = number*0.21;
    console.log(vat)
    return vat;
}

const total = function(number) {
    console.log("calling Total function...")
    const vatNum = vatCalc(number);
    return number+vatNum;
}

console.log(total(30))
console.log(total(500))




const calculator = function(number) {
    console.log("Calling calculator...")
    const percent = number/121;
    console.log(number);
    console.log(percent);
    return percent;

};

const price = function(number) {
    console.log("Calling price...");
    const procent = calculator(number);
    console.log(procent);
    console.log("BTW: ", procent*21, "Basis prijs: ", procent*100)
    return "BTW: ", procent*21, "Basis prijs: ", procent*100;
};

 console.log(price(90))

 console.log(price(500))
