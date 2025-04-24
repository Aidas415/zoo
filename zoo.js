
//zoo soda su liutais, pingvinais ir flamingais
//vardas, amzius, alki, rusis, koju kieki
class animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.legCount = 0;
        this.isHungry = false;
        this.species = "unknown";
        this.energy = 40;
    }
    hi() { 
        if (this.energy <= 15) {
            this.isHungry = true;
        }
       
        if (this.energy < 5) {
            return `Atsiprašau, ${this.name} reikia energijos 💤`;
        }
        else {
            this.energy -= 5;
            return `Labas, mano vardas ${this.name}!`;
           
        }
    }
    
    feed(food) //liutas nori mesos, pingvinas nori zuvies, flamingas nori krevečiu
    {
        if (this.energy <= 15) 
        {
            this.isHungry = true;
        }
        if (this.energy > 30) 
        {
            return `${this.name} nenori valgyti.`
        }
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
            return `${this.name} nenori valgyti.`
        }            
    }
    energy() {

    }
    sleep() {
        this.energy += 20;
        if (this.energy <= 15) {
            this.isHungry = true;
        }
    }
    HappyBirthday() {
        ++this.age
        return `${this.name}, sveikiname tave su gimtadieniuir skanaus tau torto iš ${this.wantedFood} 🎆🎇!`
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
       
        if (this.energy < 10) {
            return `Atsiprašau, ${this.name} reikia energijos 💤`
        }
        if (word === 'hi' || word === 'hello' || word === 'labas'){
            this.energy -= 10; 
            if (this.energy <= 15) {
                this.isHungry = true;
            }
            return `👏👋 labas, mano vardas ${this.name}!`;
        } 
        else {
            this.energy -= 10;
            if (this.energy <= 15) {
                this.isHungry = true;
            }
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
        
        if (this.energy < 10) {
            return `Atsiprašau, ${this.name} reikia energijos 💤`;
        }
        else if (left <= 5 && right <= 5){
            this.energy -= 10; 
            if (this.energy <= 15) {
                this.isHungry = true;
            }
            return `${this.name} parodė ${n} pirštus`;
        }
        if (left > 5 || right > 5){
            this.energy -= 10; 
            if (this.energy <= 15) {
                this.isHungry = true;
            }
            return `${this.name} į mus atgal meta saują purvo`;
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
       
        if (this.energy < 10) {
            return `Atsiprašau, ${this.name} reikia energijos 💤`
        }
        else if (weather === 'saulėta'){
            this.energy -= 10; 
            if (this.energy <= 15) {
                this.isHungry = true;
            }
            return `🌈`;
        }
        if (weather === 'debesuota'){
            this.energy -= 10; 
            if (this.energy <= 15) {
                this.isHungry = true;
            }
            return `💦`;
        }
        if (weather === 'šalta'){
            this.energy -= 10; 
            if (this.energy <= 15) {
                this.isHungry = true;
            }
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
drum.trick();
console.log(drum);
console.log(miki.trick(5,4));
console.log(miki.hi());
console.log(miki.trick(2,1));
console.log(miki.trick(1,0));
console.log(miki.trick(2,5));
console.log(miki.hi());
console.log('---------------');
console.log(miki);
//console.log(drum);
console.log('---------------');
console.log(miki.feed('fruit'))
//console.log(miki.feed('fruit'))
console.log(miki);
console.log(miki.hi());






    

    
    
