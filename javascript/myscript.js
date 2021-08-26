let listaNumeri = []

for (let i =1; i < 100; i++){

    if (i % 5 == 0 && i % 3 == 0) {
        listaNumeri.push("fizzbuzz")
    } else if (i % 3 == 0){
        listaNumeri.push("fizz")
    } else if ((i) % 5 == 0){
        listaNumeri.push("buzz")
    } else  {
        listaNumeri.push(i);
    }
}

console.log(listaNumeri)