const tabuleiro = ['b', 'b', 'b', '', 'p', 'p', 'p'];

function trocar(origem, destino) {

    if (tabuleiro[origem] === '') return;
    if (tabuleiro[destino] !== '') return;

    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = '';
}

export function mover(iPecinha) {    
    
    if (tabuleiro[iPecinha] === 'b') {
        if (tabuleiro[iPecinha + 1] !== '') {
            trocar(iPecinha, iPecinha + 2);
        }
        else {
            trocar(iPecinha, iPecinha + 1);
        }
        return;
    }

    if (tabuleiro[iPecinha] === 'p') {
        if (tabuleiro[iPecinha - 1] !== '') {
            trocar(iPecinha, iPecinha - 2);
        }
        else {
            trocar(iPecinha, iPecinha - 1);
        }
        return;
    }
}

export function getTabuleiro() {
    return structuredClone(tabuleiro);
}