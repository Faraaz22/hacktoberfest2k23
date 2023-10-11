let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short(){
    let longURL = document.getElementById("longer").value;
    let shortURL = document.getElementById("shortbox");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link;
    // console.log(data.result.short_link);

}

let copybtn = document.getElementById("copy");
let finalurl = document.getElementById("shortbox");
copybtn.onclick = ()=>{
    finalurl.select();
    window.navigator.clipboard.writeText(finalurl.value); 
     
}