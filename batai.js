// batu spinta su mot. vyr ir vaikiskais batais
// aprasomi padai, batvirsiai, auliukai, dydis
// kokiam sezonui, is ko pagaminti, modeliu ypatumai

class avalyne {
    constructor(firma, sezonas, dydis) {
        this.firma = firma;
        this.sezonas = sezonas;
        this.dydis = dydis;
        this.spalva = '';
        this.material = '';
    }
    prieziura() {
        if (this.material === 'odiniai') {
            return 'nuvaksuoti';
        }
        if (this.material === 'is audinio') {
            return 'isplauti';
        }
        if (this.material === 'guminiai') {
            return 'nuplauti';
        }
    }
}

class VyriskiBatai extends avalyne {
    constructor(firma, sezonas, dydis) {
        super(firma, sezonas, dydis) 
        this.spalva = 'ruda';
        this.material = 'odiniai';
    }
}

class MoteriskiBatai extends avalyne {
    constructor(firma, sezonas, dydis) {
        super(firma, sezonas, dydis) 
        this.spalva = 'juoda';
        this.material = 'odiniai';
    }
}

class VaikiskiBatai extends avalyne {
    constructor(firma, sezonas, dydis) {
        super(firma, sezonas, dydis) 
        this.spalva = 'roziniai';
        this.material = 'is audinio';
    }
}



//const spinta = [rieker01, timberland01, jordan01, grun01];
//console.log(spinta);

const rieker01 = new VyriskiBatai('Rieker', 'zieminiai', 43);
const timberland01 = new MoteriskiBatai('Timberland', 'demisezoniniai', 38);
const jordan01 = new VaikiskiBatai('Jordan', 'vasariniai', 22 )
//const grun01 = new VaikiskiBatai('Grun01', 'zieminiai', 23)

/console.log(grun01);
console.log(jordan01)
console.log(timberland01)
console.log(rieker01)
console.log(rieker01.spalva)

//const spinta = [rieker]
//console.log(spinta);
//console.log(spinta);
//console.log(spinta);



