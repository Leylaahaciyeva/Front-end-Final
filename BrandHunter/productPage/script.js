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
 
const {color,name,brend,image,price,category,sizes,description,SKU,stockcount}=JSON.parse(localStorage.getItem("product"));

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


console.log(stockcount);

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
