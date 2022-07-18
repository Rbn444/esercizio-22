const numero1 = 76;
console.log('numero 1: ' + numero1);

const numero2 = 18;
console.log('numero 2: ' + numero2);

let pl1 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(pl1);

let pl2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(pl2);

let greetings;




    if (pl1 == numero1 || pl1 == numero2){
        greetings = "pl1 ha vito";
    }
    else if (pl2 == numero1 || pl2 == numero2){
        greetings = "pl2 ha vito";
    }
    else if (pl1 - numero1 < pl2 - numero1 || pl1 - numero2 < pl2 - numero2){
        greetings = "pl1 si è avvicinato di più";
    }
    else if (pl2 - numero1 < pl1 - numero1 || pl2 - numero2 < pl1 - numero2){
        greetings = "pl2 si è avvicinato di più";
    }

    
document.getElementById("demo").innerHTML = greetings;



