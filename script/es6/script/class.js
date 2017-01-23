//Modifica del file da committare
// Base Class ES6
class Uccello {
	constructor(peso, altezza){
		this.peso = peso;
		this.altezza = altezza;
	}
	
	cammina(){
		console.log("cammina!");
	}
}

//Subclass
class Pinguino extends Uccello {
	constructor(peso, altezza){
		super(peso, altezza);
	}
	
	nuota(){
		console.log("nuota");
	}
}
