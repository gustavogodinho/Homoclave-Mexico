var rfc = { 
    getHomoclave: function(name, father_surname, mother_surname){
        var texto = (name +' '+ father_surname +' '+  mother_surname).toUpperCase();
        
        var homoclave = 'MAHM670102' + f.HomoclaveRFC(texto);
        var digito = homoclave + d.DigitoVerificadorRFC(homoclave);

        return digito;
    }
}
var f = {
HomoclaveRFC: function(texto){
    const equivalencia = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
    var nomeCompleto = texto;
    var caracter;
    var cadenaNums = '';
    var numero1;
    var numero2;
    var suma = 0;
    var homoclave;
    var cociente;
    var residuo;

    debugger;
    for (var i = 0; i <= nomeCompleto.length; i++) {
        caracter = nomeCompleto.substr(i, 1);

        if (caracter == ' ') {
            cadenaNums += '00';
        } else if (caracter == '&') {
            cadenaNums += '10';
        } else if (caracter == 'Ñ') {
            cadenaNums += '10';
        } else if (/[ABCDEFGHI']+/.test(caracter)) {
            cadenaNums += (caracter.charCodeAt(0) - 54).toString();
        } else if (/[JKLMNOPQR]+/.test(caracter)) {
            cadenaNums += (caracter.charCodeAt(0) - 53).toString();
        } else if (/[STUVWXYZ]+/.test(caracter)) {
            cadenaNums += (caracter.charCodeAt(0) - 51).toString();
        }
    }
    cadenaNums = '0' + cadenaNums;
    
    for (var i = 0; i <= ((cadenaNums).length - 1); i++) {
        numero1 = cadenaNums.substr(i, 2);
        numero2 = cadenaNums.substr(i + 1, 1);

        suma += numero1 * numero2;
    }

    var l = suma.toString().length;
    var rigth = suma.toString().substr(l - 3);

    cociente = parseInt(rigth / 34);
    residuo = rigth % 34;

    homoclave = equivalencia.substr(cociente, 1) + equivalencia.substr(residuo, 1);

    return homoclave;

    }
}
var d = {
        DigitoVerificadorRFC: function(texto){
            var digitoVerificador = '';
            var total = texto.length;
            var caracter;
            var cadenaNums = '';
            var cont = 0;
            var numero;
            var suma = 0;
            var residuo;

            for (var i = 0; i <= total; i++) {
                caracter = texto.substr(i, 1);

                if (caracter == ' ') {
                    cadenaNums += '37';
                } else if (caracter == '&') {
                    cadenaNums += '24';
                } else if (caracter == 'Ñ') {
                    cadenaNums += '38'
                } else if (/[ABCDEFGHIJKLMN]+/.test(caracter)) {
                    cadenaNums += (caracter.charCodeAt(0) - 55).toString();
                } else if (/['OPQRSTUVWXYZ']+/.test(caracter)) {
                    cadenaNums += (caracter.charCodeAt(0) - 54).toString();
                } else if (/[0-9]+/.test(caracter)) {
                    cadenaNums += '0' + caracter;
                }
            }

            for (var y = 0; y <= 23; y+=2) {
                numero = parseInt(cadenaNums.substr(y, 2));
                suma += (numero * (13 - cont));
                cont++;
            }

            residuo = suma % 11;

            if (residuo == 0) {
                digitoVerificador = '0';
            } else if (residuo == 10) {
                digitoVerificador = 'A';
            } else {
                digitoVerificador = (11 - residuo).toString();
            }

            return digitoVerificador;
    }
}
