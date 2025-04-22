
//zoo soda su liutais, pingvinais ir flamingais
//vardas, amzius, alki, rusis, koju kieki
class animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.legCount = 0;
        this.isHungry = true;
        this.species = "unknown";
        this.energy = 40;
    }
    hi() { 
        this.energy -= 5;
        if (this.energy <= 0) {
            return `i need energy 💤`;
        }
        else {
        return `Hi, my name is ${this.name}!`;
        }
    }
    
    feed(food) //liutas nori mesos, pingvinas nori zuvies, flamingas nori krevečiu
    {
        if(this.isHungry === true && this.wantedFood === food)
        {
            this.isHungry = false;
            this.energy += 10;
            return "Ačiū už pietus"
        }
        else if(this.isHungry === true)
        {
            return "Duok tinkamą maistą!!"
        }
        else
        {
            return "Nenoriu valgyti."
        }            
    }
    energy() {

    }
    HappyBirthday() {
        ++this.age
    }
}

class Lion extends animal{
    constructor(name, age)
    {
        super(name, age)
        this.legCount = 4;
        this.species = "liutas";
        this.wantedFood = "meat"
    }
    voice() {
        return `"roar, roar!" 🦁`
    }
 
}

class Penguin extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = 'pingvinas';
        this.wantedFood = 'fish';
    }
    voice() {
        return `"svypt, svypt!" 🐧`
    }
    trick(word) {
        this.energy -= 10;
        if (this.energy <= 0) {
            return `i need energy 💤`
        }
        if (word === 'hi' || word === 'hello' || word === 'labas'){
            return `👏👋 hi, my name is ${this.name}!`;
        } 
        else {
            return `👏👋`
        }
    }
}


class Flamingo extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "flamingas";
        this.wantedFood = "shrimp";
    }
    voice() {
        return `"fley, fley!" 🦩`
    }
}

const simba = new Lion("Simba", 4)
console.log(simba.name);                // Simba
console.log(simba.isHungry);            // true
console.log(simba.feed("meat"));        // Ačiū už pietus
console.log(simba.isHungry);            // false
console.log(simba.feed());              // Nenoriu valgyti
console.log(simba.hi());                // Hi, my name is Simba!    

const kowalski = new Penguin("Kowalski", 10);
console.log(kowalski.legCount);            // 2
console.log(kowalski.trick('labas'));
//console.log(kowalski.feed('fish'));




const zoo = [kowalski, simba, new Lion("Puma", 8), new Penguin("Rico", 3), new Flamingo("Richard", 6)]

console.log(zoo[3].trick('labas'));
console.log("-------------------")
//console.log(zoo)

function oldestAnimal(animals)
{
    let animal
    let maxAmzius = 0;

    for(i in animals)
    {
        if(animals[i].age>maxAmzius)
        {
            animal = animals[i].name;
            maxAmzius = animals[i].age;
        }
    }
    return animal;
}

console.log(oldestAnimal(zoo))             // Kowalsky

function collectBirds(animals)
{
    const birds = [];

    for(i in animals)
    {
        if(animals[i].wingCount != undefined)
        {
            birds.push(animals[i]);
        }
    }
    return birds
}

//console.log(collectBirds(zoo))

class Monkey extends animal {
    constructor(name, age){
        super(name, age)
        this.legCount = 2;
        this.hungry = false
        this.armCount = 2;
        this.species = 'beždžionė';
        this.wantedFood = 'fruit';
    }
    trick(left,right) {
        let n =0;
        n = left + right;
        this.energy -= 10;
        if (this.energy <= 0) {
            return `I need energy 💤`;
        }
        else if (left <= 5 && right <= 5){
            return `beždžionė parodė ${n} pirštus`;
        }
        if (left > 5 || right > 5){
            return `beždžionė į mus atgal meta saują purvo`;
        }
    }
}

const miki = new Monkey('Miki', 5);
//console.log(miki);

class Elephant extends animal {
    constructor(name, age){
        super(name, age)
        this.legCount = 4;
        this.hungry = false;
        this.species = 'dramblys';
    }
    trick(weather) {
        this.energy -= 10;
        if (this.energy <= 0) {
            return `I need energy 💤`
        }
        else if (weather === 'saulėta'){
            return `🌈`;
        }
        if (weather === 'debesuota'){
            return `💦`;
        }
        if (weather === 'šalta'){
            return `🥶`
        }
    }
}

const drum = new Elephant('Drum', 7);
//console.log(drum);

kowalski.HappyBirthday();
console.log(kowalski.feed('fish'));
console.log(kowalski);
console.log(drum.hi());
console.log(drum.trick('saulėta'));
console.log(drum.trick('šalta'));
console.log(drum.trick('debesuota'));
drum.trick();
console.log(miki.trick(5,4));
console.log(miki.hi());
console.log(miki.trick(2,1));
console.log(miki.trick(1,0));
console.log(miki.trick(2,5));
console.log(miki.hi());
console.log(miki);
//console.log(drum);
console.log();









    

    
    
