// # EXO1

// - Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// - Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// - Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// - Puis créez une instance de votre personnage.
// - Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// - Créez une instance de Bus. 
// - 8h00 Vous êtes à la maison.
// - 8h30 Vous prennez le bus vers MolenGeek.
// - 8h45 Vous êtes à MolenGeek.
// - 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// - 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// - 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// - Faites un console.log() de votre argent, ainsi que l'argent du Bus

// class Lieux {
//     constructor(nom,personnes){
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }



// class Personne {
//     constructor(nom,prenom,argent){
        
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;

        
//     }
//     seDeplacer(start,end, transport){
//         start.personnes.splice(start.personnes.indexOf(this), 1);
//         console.log(`${this.prenom} sort de ${start.nom}.`);
//         if (transport.embarquer(this)== true){

//             end.personnes.push(this);
//             console.log(`${this.prenom} est arrivé ${end.nom}`);
            
//         }
//         else{
//             start.personnes.push(this);
//             console.log(`${this.prenom} n'a plus assez d'argent et reste à ${start.nom}`);
//         }

//     }
// }



// class Bus {
//     constructor(caisse){
//         this.place =[];
//         this.caisse = caisse;
//         this.prix = 2.80;
        
       
//     }
//     embarquer(personne){

//         if (personne.argent >= this.tarif) {
//             this.place.push(personne);
//             console.log(`${personne.prenom} embarque dans le bus`);

//             personne.argent -= this.tarif;
//             this.caisse += this.tarif;
//             this.place.splice(this.place.indexOf(personne),1);
//             console.log(`${personne.prenom} sort du bus `);
//             return true;
            
//         }
//         else{
//             return false;
//         }

//     }
// }


// let kanen = new Personne("kanengele","philippe",15,);
// let maison = new Lieux("maison",[kanen]);
// let molengeek = new Lieux("molengeek",[]);
// let Snack = new Lieux("snack",[]);
// let bus = new Bus(0);
// kanen.seDeplacer(maison,molengeek, bus);
// console.log('____________');
// kanen.seDeplacer(molengeek, Snack, bus);
// console.log('____________');
// kanen.seDeplacer(Snack, maison, bus);
// console.log('____________');





// # EXO Bonus (refaire en class)
// - Créer deux personnages du nom de François et Sergio
// - Créer une propriete panier qui reçoit les ingrédients du super marché, par exemple huile,tomate,pain etc..
// - Rajouter à François la method derober, faites en sorte que François dérobe 2 aliments à Sergio 
// - Ecrivez tout le code ici dessous.

class Personne{
    constructor(nom,panier){
        this.nom = nom;
        this.panier = panier;
    }
    derober(perso2){
        for (let i = 0; i < 2; i++) {

            let product = prompt(`que vous le derober? ${perso2.panier}`).toLowerCase();
            this.panier.push(product);
            console.log(product);

            perso2.panier.splice(perso2.panier.indexOf(product),1);
            
            
        }
        
    }
}


let francois = new Personne("francois",["huile","tomate","sucre"]);
let Sergio = new Personne("sergio",[]);

Sergio.derober(francois);
console.log(francois.panier);
console.log(Sergio.panier);




