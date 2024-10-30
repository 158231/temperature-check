const btn=document.getElementById("result")
const number=document.getElementById("number")
const output=document.getElementById("output")

btn.addEventListener("mousedown",(e)=>{
    console.log(e);
    let F=((9/5)*number.valueAsNumber)+32;
    output.innerHTML=`${number.valueAsNumber}°C is equal to ${F}°F`;
});

    

