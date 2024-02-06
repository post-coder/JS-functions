
function pariODispari(numero) {

    if (numero % 2 == 0) {

        return "pari";

    } else {

        return "dispari";

    }

}



document.getElementById("start").addEventListener('click', 
    function() {
    
        const number = document.getElementById("numero").value;

        document.querySelector("h1").innerText = pariODispari(number);

    }
)


// let risultato = pariODispari(Number(prompt("Inserisci un numero")));

// console.log(risultato);

// risultato = pariODispari(6753216735261);

// console.log(risultato)

