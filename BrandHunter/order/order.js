
import products from "../data.js";


const orderList=document.getElementById("orderList")


const basketcounts=()=>{
    const fetchedCardItems=JSON.parse(localStorage.getItem("cartItems"));
    
    const countBasket=document.getElementById("count")
    
        countBasket.textContent=fetchedCardItems.length;
    
 }
basketcounts()

const orderItem=JSON.parse(localStorage.getItem("orderItems"));


orderList.innerHTML="";

orderItem.forEach((item,index,array)=>{
  
    orderList.innerHTML+=` 
    <div class="flex justify-between items-center text-sm">
    <div class="flex gap-3 items-center	">
        <div class="w-20 border rounded-xl overflow-hidden">
            <img src="${item.image}" alt="">
        </div>
        <div class="space-y-2 font-medium">
            <a href="">${item.categoryType}</a>
        </div>
    </div>
    <div class="font-bold">${item.price} x ${1}</div>
</div>`

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


