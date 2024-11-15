const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const container= document.getElementById("risultato");
console.log(risultato);
names.forEach(element => {
    const risultato = document.createElement('div');
    risultato.innerHTML = `<P> ${element} </P>`;
    container.appendChild(risultato);
});