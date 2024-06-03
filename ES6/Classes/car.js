class Car{

    constructor(name){
        this.brand=name;
    }

    present(){
        return ` ${this.brand} car`;
    }
}


class Model extends Car{
    constructor(name,mod){  
        super(name);
        this.model=mod;

    }
    show(){
        return `I have ${super.present()} and it is ${this.model}`;
    }
}

// const myCar=new Car("Ford");

// console.log(myCar.brand);
// myCar.present();

const myModel=new Model("Ferrari","G390");
console.log(myModel.show());