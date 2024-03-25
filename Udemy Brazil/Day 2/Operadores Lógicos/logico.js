let temIdadeMin = true; // Variável que indica se a pessoa tem idade mínima para votar
let temTitulo = false; // Variável que indica se a pessoa tem título de eleitor

// Verifica se a pessoa pode votar.
// Ela pode votar se tiver idade mínima (END) E  tiver título de eleitor.
let podeVotar = temIdadeMin && temTitulo;
console.log('Pode Votar: ' + podeVotar);

// Verifica se a pessoa pode viajar.
// Ela pode viajar se NÃO puder votar (ou seja, se não tiver idade mínima OU não tiver título de eleitor).
let podeViajar = !podeVotar;
console.log('Pode Viajar: ' + podeViajar);

let ultimoAno = false; // Variável que indica se o estudante está no último ano
let concluiuDisciplinas = true; // Variável que indica se o estudante concluiu todas as disciplinas obrigatórias

// Para se inscrever na disciplina opcional, o estudante deve estar no último ano OU ter concluído todas as disciplinas obrigatórias.
let podeSeInscerver = ultimoAno || concluiuDisciplinas;
console.log('Pode se inscrever na disciplina opcional: ' + podeSeInscerver);
