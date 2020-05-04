let secondTens=0, secondOnes=0, msHundreds=0, msTens=0;

const tensSeconds = document.querySelector("#secondTens");
const onesSeconds = document.getElementById("secondOnes");
const hundredsMS= document.getElementById("msHundreds");
const tensMS = document.getElementById("msTens");

tensSeconds.textContent=0;
onesSeconds.textContent=0;
setInterval(() => {
    secondTens++;
    tensSeconds.textContent=secondTens;
}, 10000);


setInterval(() => {
    secondOnes++;
    if(secondOnes>9){
        secondOnes=0;
    }
    onesSeconds.textContent=secondOnes;
}, 1000);


setInterval(() => {
    msHundreds++;
    if(msHundreds>9){
        msHundreds=0;
    }
    hundredsMS.textContent=msHundreds;
}, 100);

setInterval(() => {
    msTens++;
    if(msTens>9){
        msTens=0;
    }
    tensMS.textContent=msTens;
}, 10);


