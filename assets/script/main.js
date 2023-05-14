const formatterText = document.getElementById('text');

function textToCapitalizeText() {
    formatterText.value = formatterText.value.replace(formatterText.value[0], formatterText.value[0].toUpperCase());
}

function textToUpperCaseText() {
    formatterText.value = formatterText.value.toUpperCase();
}

function textToLowerCaseText() {
    formatterText.value = formatterText.value.toLowerCase();
}

function invertText() {
    formatterText.value = 
    formatterText.value
    .split('').reverse().join('');
}

function textToTitleText() {
    const array = formatterText.value.toLowerCase().split(' ');
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index][0].toUpperCase() + array[index].slice(1); 
    }
    formatterText.value = array.join(' ');
}