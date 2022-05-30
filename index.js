// Add the coffee to local storage with key "coffee"

const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res.menu.data);
    showData(res.menu.data);
})
.catch(function(err){
    console.log(err)
})
function showData(data){
    data.map(function(el){
        let maindiv = document.getElementById("menu");

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
        button.setAttribute("id","add_to_bucket")
        button.textContent = "add to bucket";
        button.addEventListener("click",function(){
            addToBucket(el);
        })
        product.append(image,title,price,button);
        maindiv.append(product);
    })
}

function  coffee(i,t,p){
    this.image = i;
    this.title = t;
    this.price = p;
}
let count = 1
let coffees = JSON.parse(localStorage.getItem("coffee")) || [];
function addToBucket(el){
    document.getElementById("coffee_count").textContent = coffees.length+1;
    let img = el.image;
    let title = el.title;
    let price = el.price;
    let p1 = new coffee(img,title,price);
    coffees.push(p1);
    localStorage.setItem("coffee",JSON.stringify(coffees));
}
// document.getElementById("coffee_count").textContent = coffees.length+1;