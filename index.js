let charVal=document.getElementById("textarea");
let totalCount=document.getElementById("total-counter");
let remainingCount=document.getElementById("remaining-counter");

let char=0;

charVal.addEventListener("keyup",()=>{
    // We can also create a function and add the code in it instead of just directly adding it.
    // alert("Hello");
    userChar=charVal.value.length;
    totalCount.innerText=userChar;
    remainingCount.innerText=150-userChar;
});

// Copy text function:-

let copytext=()=>{
    charVal.select();
    charVal.setSelectionRange(0,9999); // This line is for the mobile version
    // the 'select' method will work for PC only.
    navigator.clipboard.writeText(charVal.value);
}