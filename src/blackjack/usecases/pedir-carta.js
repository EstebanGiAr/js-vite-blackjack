/**
 * Esta funcion me permite tomar una carta
 * @param {Array<string>} deck Es un arreglo de string
 * @returns {String} Retorna la carta que se eleminó
 */


export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

