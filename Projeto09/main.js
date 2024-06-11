let idade = prompt("Digite a sua idade: ")
let temTitulo = prompt("Você tem título de eleitor ? (sim/nao)")
let idadeMinima = 18

if (idade >= idadeMinima && temTitulo == 'sim'){
   alert("Você pode votar :)")
}
else if (idade >= idadeMinima && temTitulo == 'nao'){
   alert("Você precisa de um título para votar :(")
}
else{
   alert("Você não tem a idade mínima para votar :(")
}
