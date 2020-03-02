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
                '00';
                case '&':
                    '10';
                    case 'Ñ':
                        '10';
                        case ('A','B','C','D','E','F','G','H','I'):
                            'desenvolver';
                            case ('J','K','L','M','N','O','P','Q','R'):
                                    'desenvolver';
                                    case ('S','T','U','V','W','X','Y','Z'):
                                        'desenvolver';
        default:
            '';
        }
    
        index++;
    }

    index = 1;

    while(index <= length(cadenaNums)-1){
    
        numero1 = 'desenvolver';
        numero2 = 'desenvolver';

        suma += numero1 * numero2;
        index++;
    }

    cociente = 'desenvolver';
    residuo = 'desenvolver';

    homoclave = equivalencia.substring(cociente+1,1) + equivalencia.substring(residuo+1,1);

    return homoclave;
}

function DigitoVerificadorRFC(x){

    return x;
}