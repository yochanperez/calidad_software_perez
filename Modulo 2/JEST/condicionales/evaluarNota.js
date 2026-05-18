function evaluarNota(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
        throw new Error('nota invalida');
    }

    if (nota > 7) {
        return 'Aprobado';
    } 
    
    if (nota >= 4) {
        return 'Supletorio';
    } 
    
    return 'Reprobado';
}

module.exports = { evaluarNota };