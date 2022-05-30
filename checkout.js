function confirm(){
    event.preventDefault();
    // console.log("hi")
    let order = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(main())
        },3000)
    })
    // console.log(order)
}


let checkout = document.getElementById("checkout");
let button = document.createElement("button");
button.setAttribute("id","confirm")
button.textContent = "confirm";
button.addEventListener("click",function(){
    confirm();
})
checkout.append(button);


async function main(){
    // event.preventDefault();
    let order1 = await alert("Your order is accepted ");
    let order2 = await alert("Your order is being Prepared ");
    let order3 = await alert("Your order is being packed")
    let order4 = await alert("Your order is out for delivery");
    let order5 = await alert("Order delivered")
}
