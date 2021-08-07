let btnEl = document.querySelector(".generate");
let serialEl= document.querySelector(".serial");
btnEl.onclick = function () {
    let Characters ="123456789asdfghjklmnbvcxzqwertyuiop$%^&*";
    let CharsCount = 10;
    let randomSerial="";
    for (let i=0 ; i < CharsCount; i ++){
        randomSerial += Characters[Math.floor(Math.random() * Characters.length)];
    }
    serialEl.innerHTML = randomSerial;
}