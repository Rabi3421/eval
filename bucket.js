// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffees = JSON.parse(localStorage.getItem("coffee")) || [];
console.log(coffees);
let sum = 0;
coffees.map(function(el,index){
    let maindiv = document.getElementById("bucket");

        let product = document.createElement("div");
        product.style.textAlign="center";
        product.style.border="1px solid blue";


        let image = document.createElement("img");
        image.src = el.image;

        let title = document.createElement("p");
        title.textContent = el.title;

        let price = document.createElement("p");
        price.textContent = el.price;

        let button = document.createElement("button");
        button.setAttribute("id","remove_coffee")
        button.textContent = "remove";
        button.addEventListener("click",function(){
            removeFromBucket(el,index);
        })
        product.append(image,title,price,button);
        maindiv.append(product);

        sum = sum +Number(el.price);
})
document.getElementById("total_amount").append(sum);
function removeFromBucket(el,index){
    coffees.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(coffees));
    window.location.reload();
}