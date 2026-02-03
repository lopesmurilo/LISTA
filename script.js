const listaCarros = [
    { id: 1, modelo: 'Honda Civic', preco: 90000.00, disponivel: true },
    { id: 2, modelo: 'Toyota Corolla', preco: 95000.00, disponivel: true },
    { id: 3, modelo: 'Ford Focus', preco: 60000.00, disponivel: false },
    { id: 4, modelo: 'Chevrolet Cruze', preco: 85000.00, disponivel: false },
    { id: 5, modelo: 'Volkswagen Jetta', preco: 110000.00, disponivel: false }
];


// FILTER - carros disponíveis
const carrosDisponiveis = listaCarros.filter(carro => carro.disponivel);
// console.log(carrosDisponiveis);


// MAP - aplicar depreciação anual de 5% (FOR)
const carrosComDepreciacaoFor = [];

for (let i = 0; i < carrosDisponiveis.length; i++) {
    const c = carrosDisponiveis[i];
    carrosComDepreciacaoFor.push({
        ...c,
        precoFinal: +(c.preco * 0.95).toFixed(2)
    });
}

console.log(carrosComDepreciacaoFor);

// MAP - aplicar depreciação anual de 5% (MAP)
const carrosComDepreciacao = carrosDisponiveis.map(carro => {
    return {
        ...carro,
        precoFinal: +(carro.preco * 0.95).toFixed(2)
    };
});

console.log(carrosComDepreciacao);


// SOMA TOTAL DA FROTA (FOR)
let valorTotalFrotaFor = 0;

for (let i = 0; i < carrosComDepreciacao.length; i++) {
    valorTotalFrotaFor += carrosComDepreciacao[i].precoFinal;
}

console.log(`R$ ${valorTotalFrotaFor.toFixed(2)}`);


// REDUCE - soma total da frota
const valorTotalFrota = carrosComDepreciacao.reduce((acumulador, carro) => {
    return acumulador + carro.precoFinal;
}, 0);

console.log(`R$ ${valorTotalFrota.toFixed(2)}`);


// RELATÓRIO FINAL
console.log(`--- RELATÓRIO DE VENDAS (CARROS SEMINOVOS) ---`);
console.log(`Carros analisados: ${carrosComDepreciacao.length}`);
console.log(`Valor total da frota (com depreciação): R$ ${valorTotalFrota.toFixed(2)}`);
