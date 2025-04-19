

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
    }
    
    feed(food) //liutas nori mesos, pingvinas nori zuvies, flamingas nori krevečiu
    {
        if(this.isHungry===true && this.wantedFood === food)
        {
            this.isHungry=false;
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
}

class Lion extends animal{
    constructor(name, age)
    {
        super(name, age)
        this.legCount = 4;
        this.species = "liutas";
        this.wantedFood = "meat"
    }
}

class Penguin extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "pingvinas";
        this.wantedFood = "fish";
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

}

const simba = new Lion("Simba", 4)
console.log(simba.name);                // Simba
console.log(simba.isHungry);            // true
console.log(simba.feed("meat"));        // Ačiū už pietus
console.log(simba.isHungry);            // false
console.log(simba.feed());              // Nenoriu valgyti

const kowalski = new Penguin("Kowalski", 10)
console.log(kowalski.legCount)            // 2


const zoo = [kowalski, simba, new Lion("Puma", 8), new Penguin("Rico", 3), new Flamingo("Richard", 6)]

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

console.log(collectBirds(zoo))















