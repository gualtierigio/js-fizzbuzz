let listaNumeri = []

for (let i =0; i < 100; i++){
    let n = (i + 1);
    
    if (n % 5 == 0 && n % 3 == 0) {
        listaNumeri.push("fizzbuzz")
    } else if (n % 3 == 0){
        listaNumeri.push("fizz")
    } else if (n % 5 == 0){
        listaNumeri.push("buzz")
    } else  {
        listaNumeri.push(n);
    }
}

console.log(listaNumeri)