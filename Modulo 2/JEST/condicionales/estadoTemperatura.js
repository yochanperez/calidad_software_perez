function estadoTemperatura(temperatura){
    if (typeof temperatura !== 'number'){
        throw new Error ('temperatura invalida');
    }
    if (temperatura >= 30){
        return 'Calor';
    }

   else if (temperatura< 15){
        return 'Frio';
    }
    else if (temperatura  >= 15 ){
        return 'Templado';
    }
    return temperatura;

}
module.exports= { estadoTemperatura };

