const vehicle=["Volvo","tata","Maruti Suzuki"]

const[bus,truck,car]=vehicle
console.log(bus)

const[mybus,,mycar]=vehicle;
console.log(mycar);


const [yourBus]=vehicle
console.log(yourBus);

function Calculate(a,b){
    const add=a+b;
    const sub=a-b;
    const mult=a*b;
    const div=a/b;
    return [add,sub,mult,div]

}

const [add,subtract,multiply,divide]=Calculate(10,5)
console.log(add);


//Destruction with object

const result={
    hindi:90,
    english:88,
    maths:70,
    physics:55,
    chemistry:60

}

function percentageCalculate({hindi:h,english:e,maths:m,physics:p,chemistry:c}){
    const perc=(h+e+m+p+c)/5;
    console.log(perc);
    return perc;
}

const percentage=percentageCalculate(result);
console.log(percentage);

