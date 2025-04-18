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

const rieker = new VyriskiBatai('Rieker', 'zieminiai', 43);
const timberland = new MoteriskiBatai('Timberland', 'demisezoniniai', 38);
const jordan = new VaikiskiBatai('Jordan', 'vasariniai', 22 )
const batuDeze = [rieker, timberland, jordan, new VaikiskiBatai('grun01', 'zieminiai', 23)];
batuDeze[3].spalva = 'pilka';
console.log('------------');
//console.log(batuDeze[3]);
//console.log(batuDeze[1]);
//console.log(batuDeze[0])
//console.log(batuDeze[2])



class rubai {
    constructor(firma, sezonas, dydis) {
        this.firma = firma;
        this.sezonas = sezonas;
        this.dydis = dydis;
        this.spalva = '';
        this.material = '';
        this.stilius = '';
        this.skalbti = 40;
    }
    skalbimas() {
        if (this.skalbti === 30) {
            return 'skalbti 30° temperaturoje';
        }
        if (this.skalbti === 40) {
            return 'skalbti 40° temperaturoje';
        }
        if (this.skalbti === 'rankomis') {
            return 'skalbti rankomis';
        }
    }
}

class Kelnes extends rubai {
    constructor(firma, sezonas, dydis) {
        super(firma, sezonas, dydis)
        this.spalva = 'melyna';
        this.material = 'dzinsas';
        this.stilius = 'klasikinis';
        this.skalbti = 40;
    }
}

class Marskiniai extends rubai {
    constructor(firma, sezonas, dydis) {
        super(firma, sezonas, dydis)
        this.spalva = 'melsva';
        this.material = 'medvilne';
        this.stilius = 'laisvalaikio';
        this.skalbti = 30;
    }
}

const mondo = new Marskiniai('Mondo', 'vasariniai', 'L')
const bigStar = new Kelnes('Big Star', 'demisezoniniai', 33)
//console.log(bigStar);
//console.log(mondo);

class Striukes extends rubai {
    constructor (firma, sezonas, dydis) {
        super (firma, sezonas, dydis)
        this.spalva = 'melyna';
        this.material = 'sintetika';
        this.stilius = 'laisvalaikio';
        this.skalbti = 'rankomis';
    }
}

class Megstiniai extends rubai {
    constructor (firma, sezonas, dydis) {
        super (firma, sezonas, dydis)
        this.spalva = 'balta';
        this.material = 'vilna';
        this.stilius = 'klasikinis';
        this. skalbti = 'rankomis';
    }
}

const lorr = new Megstiniai('Lorr & Men', '', 'XL');
const rab = new Striukes('Rab', 'ziemine', 'XL');
//console.log(rab);
//console.log(lorr);

const spinta = [mondo, bigStar, rab, lorr, new Striukes('J.Style', 'demisezonine', 'L'), new Kelnes('Bigman', 'vasarines', 34)];
//console.log(spinta);
//console.log(spinta[5]);
spinta[5].spalva = 'juoda';
spinta[5].material = 'dzinsas';
spinta[5].stilius = 'laisvalaikio';
spinta[5].skalbti = 40;

















