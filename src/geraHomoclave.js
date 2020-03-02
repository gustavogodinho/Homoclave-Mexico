
var rfc = { 
    HomoclaveRFC: function(name, father_surname, mother_surname){
    var equivalencia = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
    var nomeCompleto = (name +' '+ father_surname +' '+  mother_surname).toUpperCase();
    var index = 1;
    var caracter;
    var cadenaNums = '';
    var numero1;
    var numero2;
    var suma = 0;
    var homoclave;
    var cociente;
    var residuo;
    var total = nomeCompleto.length;


    while (index <= total){
        caracter = nomeCompleto.substr(index,1);
      
       
        if(/[ABCDEFGHI']+/.test(caracter)){
            cadenaNums += (caracter.charCodeAt(0) - 54);
        } else if (/[JKLMNOPQR]+/.test(caracter)) {
            cadenaNums += (caracter.charCodeAt(0) - 53);
        } else if(/[STUVWXYZ]+/.test(caracter)){
            cadenaNums += (caracter.charCodeAt(0) - 51);
        } else if (caracter == ' '){
            cadenaNums += '00'    
        } else if (caracter == '&'){
            cadenaNums += '10' 
        } else if (caracter == 'Ñ'){
            cadenaNums += '10' 
        }

        index++;
    }

    cadenaNums = '0' + cadenaNums;
    index = 1;

    while(index <= (cadenaNums).length -1){
    
        numero1 = cadenaNums.substr(index, 2);
        numero2 = cadenaNums.substr(index + 1, 1);

        suma += numero1 * numero2;
        index++;
    }
    var l = suma.toString().length;

    var s = suma.toString().substr(l - 3);
    var r = suma.toString().substr(l - 3);

    cociente = parseInt(s /34, 10);
    residuo = r %34;

    homoclave = equivalencia.substr(cociente+1,1) + equivalencia.substr(residuo+1,1);

    return homoclave;
 }
}

// function DigitoVerificadorRFC(x){

//     var digitoVerificador;
//     var total = x.length();
//     var index = 1;
//     var caracter; 
//     var cadenaNums = '';
//     var cont = 0;
//     var numero;
//     var suma;
//     var residuo;
//     var modValue;

//     if (total == 12){
//         modValue = 11;
//     } else {
//         modValue = 10;
//     }

//     while (index <= total){
//         caracter = x.substr(index, 1);

//         switch(caracter){
//             case ' ':
//                     cadenaNums += '37';
//                     break;
//                 case '&':
//                         cadenaNums += '24';
//                         break;
//                     case 'Ñ':
//                             cadenaNums += '38';
//                             break;
//                         case ('A','B','C','D','E','F','G','H','I','J','K','L','M','N'):
//                                 cadenaNums += (String.fromCharCode(caracter) - 55);
//                                 break;
//                             case ('O','P','Q','R','S','T','U','V','W','X','Y','Z'):
//                                     cadenaNums += (String.fromCharCode(caracter) - 54);
//                                     break;
//                                     case ('0','1','2','3','4','5','6','7','8','9'):
//                                             cadenaNums += '0' + caracter;
//                                             break;
//         default:
//             '';
//         }
//         index++;
//     }
//     index = 1;

//     while(index <= 23){
//         numero = cadenaNums.substr(index, 2);
//         suma += (numero * (13-cont));

//         cont++;
//         index = index + 2;
//     }

//     residuo = suma % modValue;
    
//     if(residuo = 0){
//         digitoVerificador = '0';
//     }else {
//         if((11 - residuo) = 10){
//             digitoVerificador = 'A';
//         }else {
//             digitoVerificador = (11 - residuo);
//         }
        
//     }

//     return digitoVerificador;
// }