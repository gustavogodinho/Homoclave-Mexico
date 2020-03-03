var rfc = { 
    getHomoclave: function(name, father_surname, mother_surname){
        var texto = (name +' '+ father_surname +' '+  mother_surname).toUpperCase();
        
        var homoclave = 'CALF45022' + f.HomoclaveRFC(texto);
        var digito = homoclave + d.DigitoVerificadorRFC(homoclave);

        return digito;
    }
}
var f = {
HomoclaveRFC: function(texto){
        var equivalencia = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
        var nomeCompleto = texto;
        var index = 0;
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
            caracter = nomeCompleto.substr(index, 1);
    
            if(caracter == ' '){
                cadenaNums += '00';
            } else if (caracter == '&') {
                cadenaNums += '10';
            } else if(caracter == 'Ñ'){
                cadenaNums += '10';
            } else if (/[ABCDEFGHI']+/.test(caracter)){
                cadenaNums += (caracter.charCodeAt(0) - 54).toString(); 
            } else if (/[JKLMNOPQR]+/.test(caracter)){
                cadenaNums += (caracter.charCodeAt(0) - 53).toString();
            } else if (/[STUVWXYZ]+/.test(caracter)){
                cadenaNums += (caracter.charCodeAt(0) - 51).toString();
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
    
        homoclave = equivalencia.substr(cociente ,1) + equivalencia.substr(residuo +1,1);
    
        return homoclave;

    }
}
var d = {
        DigitoVerificadorRFC: function(texto){
            var digitoVerificador = '';
            var total = texto.length;
            var index = 0;
            var caracter; 
            var cadenaNums = '';
            var cont = 0;
            var numero;
            var suma = 0;
            var residuo;
            var modValue;

            if (total == 12){
                modValue = 11;
            } else {
                modValue = 10;
            }

            while (index <= total){
                caracter = texto.substr(index, 1);

                if(/[ABCDEFGHIJKLMN]+/.test(caracter)){
                    cadenaNums += (caracter.charCodeAt(0) - 55).toString();
                } else if (/['OPQRSTUVWXYZ']+/.test(caracter)) {
                    cadenaNums += (caracter.charCodeAt(0) - 54).toString();
                } else if(/[0-9]+/.test(caracter)){
                    cadenaNums += '0' + caracter;
                } else if (caracter == ' '){
                    cadenaNums += '37'    
                } else if (caracter == '&'){
                    cadenaNums += '24' 
                } else if (caracter == 'Ñ'){
                    cadenaNums += '38' 
                }

                if(caracter == ' '){
                    cadenaNums += '37'; 
                } else if (caracter == '&') {
                    cadenaNums += '24';
                } else if(caracter == 'Ñ'){
                    cadenaNums += '38' 
                } else if (/[ABCDEFGHIJKLMN]+/.test(caracter)){
                    cadenaNums += (caracter.charCodeAt(0) - 55).toString();   
                } else if (/['OPQRSTUVWXYZ']+/.test(caracter)){
                    cadenaNums += (caracter.charCodeAt(0) - 54).toString();
                } else if (/[0-9]+/.test(caracter)){
                    cadenaNums += '0' + caracter; 
                }

             
                index++;
            }
            index = 0;

            while(index <= 23){
                numero = parseInt(cadenaNums.substr(index, 2));
                suma += (numero * (13-cont));

                cont++;
                index = index + 2;
            }

            residuo = suma % modValue;

            if(residuo == 0){
                digitoVerificador = '0';
            }else {
                if(parseInt(11 - residuo) == 10){
                    digitoVerificador = 'A';
                }else {
                    digitoVerificador = (11 - residuo).toString();
                }
            }
        return digitoVerificador;
    }
}
