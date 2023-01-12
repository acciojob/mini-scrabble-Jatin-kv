//your code here
let texts = document.getElementById('evaluatedText')
let count= document.getElementById("letterCount")
function charCount() {
    count.innerHTML = texts.value.length;
}
texts.oninput = charCount;
