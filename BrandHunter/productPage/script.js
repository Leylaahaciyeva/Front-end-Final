import products from "../data.js";


const productCategory=document.getElementById("productCategory")
const productName=document.getElementById("productName")
const productBrend=document.getElementById("productBrend")
const productSKU=document.getElementById("productSKU")
const productPrice=document.getElementById("productPrice")
const productTitle=document.getElementById("productTitle")
const productImage=document.getElementById("productImage")
const productSize=document.getElementById("productSize")
const productCount=document.getElementById("productCount")
const countBasket=document.getElementById("count")


const addToCartBtn=document.getElementById("addToCart")



let cartItems=[];
 
const {color,name,brend,image,price,category,sizes,description,SKU,stockcount,categorytype}=JSON.parse(localStorage.getItem("product"));

productName.textContent= name;
productBrend.textContent=brend;
productCategory.textContent=category;
productPrice.textContent=`AZN ${price}`
productImage.src=image;
productTitle.textContent=description;
productSKU.textContent=SKU;
productSize.textContent=sizes;

if(stockcount===0){
  productCount.textContent=  "Stokda yoxdur.Sifariş etmək üçün WhatsApp və ya İnstagram adresimizlə əlaqə saxlayın"
  addToCartBtn.disabled=true;
  
}
else if(stockcount===1){
   productCount.textContent= "Yalnız 1 ədəd qalıb"
}
else {
   productCount.textContent= "Stokda var"
}

addToCartBtn.addEventListener("click",()=>{
    cartItems=JSON.parse(localStorage.getItem("cartItems"))


     const addedProduct={
         name:name,
         brend:brend,
         description:description,
         SKU:SKU,
         price:price,
         category:category,
         color:color,
         image:image,
         count:stockcount,
         size:sizes,
         categoryType:categorytype,
     }
     if(!cartItems){
         cartItems=[addedProduct];
     }
     else{
         const exisitingProduct =cartItems.find((cartItem)=>cartItem.name===name && cartItem.size===sizes);
         const exisitingProductIndex =cartItems.findIndex((cartItem)=>cartItem.name===name && cartItem.size===sizes);
 
         if (exisitingProduct && exisitingProductIndex !==undefined) {
             cartItems.splice(exisitingProductIndex,1)
 
             exisitingProduct.count+=count;
             cartItems.push(exisitingProduct);
         }
         else{
             cartItems.push(addedProduct)
         }
     }
     localStorage.setItem("cartItems",JSON.stringify(cartItems))

 })

 const searchBox=document.querySelector(".search")
const searchInput=document.getElementById("searchInput")


const availableKeywords = products.map((product) => [product.name]).flat();

let results = [];


searchInput.addEventListener("input", () => {
    setTimeout(() => {
     const givenValue = searchInput.value.trim().toLowerCase();
     if (!givenValue) {
        searchBox.classList.add("hidden");
       return;
     }
     results = [...new Set(
         availableKeywords.filter((keyword) =>
           keyword.toLocaleLowerCase().includes(givenValue)
         ))
     ];
    if (results.length > 6) {
       results.splice(0, 6);
    }
    searchBox.innerHTML = "";
    results.forEach((result) => {
    
      const liElement = document.createElement("li");
      liElement.textContent = result;
      liElement.className = "ring-1 ring-neutral-200 p-8 cursor-pointer  bg-white hover:bg-neutral-100 rounded-xl";
      searchBox.classList.remove("hidden");
      searchBox.append(liElement);
    });
     }, 30);

});


const basketcounts=()=>{
    const fetchedCardItems=JSON.parse(localStorage.getItem("cartItems"));
    
    const countBasket=document.getElementById("count")
    
        countBasket.textContent=fetchedCardItems.length;
    
 }
basketcounts()