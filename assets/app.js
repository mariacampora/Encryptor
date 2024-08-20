const textAreaTextConverted = document.getElementById("textAreaTextConverted");
const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const btnCopy = document.getElementById("btnCopy");

const withOutTextToEncript = document.getElementById("withOutTextToEncript");
const withTextToEncript = document.getElementById("withTextToEncript");
const elementTextResult = document.getElementById("elementTextResult");

let textEncrypt = "";
let textDecrypt = "";

btnEncrypt.addEventListener('click', function() {
    const textToBeConverted = textAreaTextConverted.value.trim();
    
    if (textToBeConverted.length == 0) {
        withOutTextToEncript.style.display = "block";
        withTextToEncript.style.display = "none";
        elementTextResult.innerText = "";
        return;
    }

    withOutTextToEncript.style.display = "none";
    withTextToEncript.style.display = "block";
    
    elementTextResult.innerText = encrypt(textToBeConverted);
});

btnDecrypt.addEventListener('click', function() {
    const textToBeConverted = textAreaTextConverted.value.trim();
    
    if (textToBeConverted.length == 0) {
        withOutTextToEncript.style.display = "block";
        withTextToEncript.style.display = "none";
        elementTextResult.innerText = "";
        return;
    }

    withOutTextToEncript.style.display = "none";
    withTextToEncript.style.display = "block";
    
    elementTextResult.innerText = decrypt(textToBeConverted);
});

btnCopy.addEventListener('click', function() {
    navigator.clipboard.writeText(textEncrypt);
});

function encrypt(text) {
    textEncrypt = "";
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (letter == "e") {
            textEncrypt += 'enter'                
        } else if (letter == "i") {
            textEncrypt += 'imes'
        } else if (letter == "a") {
            textEncrypt += 'ai'
        } else if (letter == "o") {
            textEncrypt += 'ober'
        } else if (letter == "u") {
            textEncrypt += 'ufat' 
        } else{
            textEncrypt += letter
        }
    }
    return textEncrypt

}

function decrypt(text) {
    return text
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");
}
