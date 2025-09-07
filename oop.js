class Pet {
    constructor(age,gender){
        this.age=age
        this.gender=gender
        this.sayHello = function(name){
            console.log(`Hello ${name} ,this is a ${this.age} years old ${this.gender} ${this.type}`)
        }
    }
}

class Cat extends Pet{
    constructor(age,gender,color){
        super(age,gender)
        this.type='Cat'
        this.color=color
    }
    getName(){
        if(this.age>=1){
            this.name='Kitten'
            console.info(this.name)
        }else{
            this.name='Grown'
            console.info(this.name)
        }
    }
    makan(){
        console.log(`A ${this.color} cat is eating`)
    }
}

let Cat1=new Cat(2,'male','White')
let Cat2=new Cat(1,'female','Orange')
Cat1.sayHello('Dedyas')
Cat1.makan()
console.info(Cat2)