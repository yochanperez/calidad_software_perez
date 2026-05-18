function puedeConducir(edad){
    if(!Number.isInteger(edad)||edad<0)
        throw new TypeError('edad invalidad')
    return edad>=18 ?'Si':'No';
}
module.exports={ puedeConducir };