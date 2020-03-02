var nome;
var paterno;
var materno;

var NomeAux = nome + ' ' + paterno + ' ' + materno;


function HomoclaveRFC(nomeAux){
    var equivalencia = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
    var nomeCompleto = nomeAux;
    var index = 1;
    var caracter;
    var cadenaNums = '';
    var numero1;
    var numero2;
    var suma;
    var homoclave;
    var cociente;
    var residuo;
    var total = length(nomeAux);


    while (index <= total){
        caracter = nomeCompleto.substring(index,1);
        cadenaNums += '';

        switch(caracter){
            case ' ':
                    cadenaNums += '00';
                case '&':
                        cadenaNums += '10';
                    case 'Ñ':
                            cadenaNums += '10';
                        case ('A','B','C','D','E','F','G','H','I'):
                                cadenaNums += (String.fromCharCode(caracter) - 54);
                            case ('J','K','L','M','N','O','P','Q','R'):
                                    cadenaNums += (String.fromCharCode(caracter) - 53);
                                    case ('S','T','U','V','W','X','Y','Z'):
                                            cadenaNums += (String.fromCharCode(caracter) - 51);
        default:
            '';
        }
        index++;
    }

    index = 1;

    while(index <= length(cadenaNums)-1){
    
        numero1 = cadenaNums.substring(index, 2);
        numero2 = cadenaNums.substring(index + 1, 1);

        suma += numero1 * numero2;
        index++;
    }

    cociente = suma.substring(suma.length-2,3)/34;
    residuo = suma.substring(suma.length-2,3)%34;

    homoclave = equivalencia.substring(cociente+1,1) + equivalencia.substring(residuo+1,1);

    return homoclave;
}

function DigitoVerificadorRFC(x){

    var digitoVerificador;
    var total = x.length();
    var index = 1;
    var caracter; 
    var cadenaNums = '';
    var cont = 0;
    var numero;
    var suma;
    var residuo;
    var modValue;

    if (total == 12){
        modValue = 11;
    } else {
        modValue = 10;
    }

    while (index <= total){
        caracter = x.substring(index, 1);

        switch(caracter){
            case ' ':
                    cadenaNums += '37';
                case '&':
                        cadenaNums += '24';
                    case 'Ñ':
                            cadenaNums += '38';
                        case ('A','B','C','D','E','F','G','H','I','J','K','L','M','N'):
                                cadenaNums += (String.fromCharCode(caracter) - 55);
                            case ('O','P','Q','R','S','T','U','V','W','X','Y','Z'):
                                    cadenaNums += (String.fromCharCode(caracter) - 54);
                                    case ('0','1','2','3','4','5','6','7','8','9'):
                                            cadenaNums += '0' + caracter;
        default:
            '';
        }
        index++;
    }
    index = 1;

    while(index <= 23){
        numero = cadenaNums.substring(index, 2);
        suma += (numero * (13-cont));

        cont++;
        index = index + 2;
    }

    residuo = suma % modValue;
    
    if(residuo = 0){
        digitoVerificador = '0';
    }else {
        if((11 - residuo) = 10){
            digitoVerificador = 'A';
        }else {
            digitoVerificador = (11 - residuo);
        }
        
    }

    return digitoVerificador;
}