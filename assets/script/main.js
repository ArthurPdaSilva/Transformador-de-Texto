let textoF = document.getElementById('texto');

function transform(x = 0) {    
    switch (x) {
        case 'c':
            textoF.value = textoF.value.replace(textoF.value[0], textoF.value[0].toUpperCase());
            break;
    
        case 'u':
                textoF.value = textoF.value.toUpperCase();
            break;
        
        case 'l':
            textoF.value = textoF.value.toLowerCase();
            break;
        
        case 'i':
            textoF.value = textoF.value.split('').reverse().join('');
            break;
       
        default:
            let array = textoF.value.toLowerCase().split(' ');
            for (let index = 0; index < array.length; index++) {
                // Slice retorne o segundo elemento do array
                array[index] = array[index][0].toUpperCase() + array[index].slice(1); 
            }
            textoF.value = array.join(' ');
            break;
    }
    
}