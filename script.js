const encryptButton = document.querySelector("#encrypt-btn");
const decryptButton = document.querySelector("#decrypt-btn");
const imageBoy = document.querySelector(".image-boy-container");
const paragraph = document.querySelector(".paragraph-container");
const resultText = document.querySelector("#result-text");

encryptButton.addEventListener("click", encrypt);
decryptButton.addEventListener("click", decrypt);

function encrypt() {
    hideElements();
    const textBox = recoverText();
    resultText.textContent = encryptText(textBox);
}

function decrypt() {
    hideElements();
    const textBox = recoverText();
    resultText.textContent = decryptText(textBox);
}

function recoverText() {
    const textBox = document.querySelector("#text-input");
    return textBox.value;
}

function hideElements() {
    imageBoy.classList.add("hide-elements");
    paragraph.classList.add("hide-elements");
}

function encryptText(message) {
    let finalText = "";

    for (let i = 0; i < message.length; i++) {
        switch (message[i]) {
            case "a":
                finalText += "ai";
                break;
            case "e":
                finalText += "enter";
                break;
            case "i":
                finalText += "imes";
                break;
            case "o":
                finalText += "ober";
                break;
            case "u":
                finalText += "ufat";
                break;
            default:
                finalText += message[i];
        }
    }
    return finalText;
}

function decryptText(message) {
    var text = message;
    var finalText = "";

    for (var i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "a":
                finalText += "a";
                i++;
                break;
            case "e":
                finalText += "e";
                i += 4;
                break;
            case "i":
                finalText += "i";
                i += 3;
                break;
            case "o":
                finalText += "o";
                i += 3;
                break;
            case "u":
                finalText += "u";
                i += 3;
                break;
            default:
                finalText += text[i];
        }
    }
    return finalText;
}

const copyButton = document.querySelector("#copy-btn");
copyButton.addEventListener("click", () => {
    const content = document.querySelector("#result-text").textContent;
    navigator.clipboard.writeText(content);
});
