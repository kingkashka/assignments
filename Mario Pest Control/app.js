const form = document.myForm

form.addEventListener("submit", function(e){
    e.preventDefault()
    let  goomb = form.goombaNum.value
    let bomb = form.bombNum.value
    let cheep = form.cheepNum.value
    let goombPrice = goomb * 5;
    let bombPrice = bomb * 7;
    let cheepPrice = cheep * 11;
    let total = goombPrice + bombPrice + cheepPrice;
    console.log(typeof goombPrice);
    console.log(form.goombaNum.value);
    alert(`
    Goomb: ${form.goombaNum.value}
    Bob-Ombs: ${form.bombNum.value}
    Cheep-cheeps: ${form.cheepNum.value}
    Total: ${total}
    `)
    console.log(total);
})

function sayHello(){
    console.log('hello!');
 }
 
 
 function stopSayingHello(){
    clearInterval(intervalID)
 }
 
 
 var intervalID = setInterval(sayHello, 1000);
 
 setTimeout(stopSayingHello,  6000)
 

 
 
