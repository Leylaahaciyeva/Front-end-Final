"use strict";

import products from "../data.js";



const cartList=document.getElementById("cartList")
const emptyBasket =document.querySelector(".emptyBasket")
const order=document.querySelector(".order")
const orderBtn=document.getElementById("orderBtn")



const fetchedCardItems=JSON.parse(localStorage.getItem("cartItems"));


cartList.innerHTML=""

if(cartList.innerHTML===""){
    order.classList.add("hidden")
   emptyBasket.classList.remove("hidden")
}


fetchedCardItems.forEach((item,index,array) => {

    cartList.innerHTML+=`
    <div class="space-y-4 col-span-3">
    <div class="space-y-4">
        <div class="aspect-square max-h-fit rounded-xl overflow-hidden transition-all ring-2 ring-neutral-100 group-hover:ring-[#ffdcdc]">
            <img class="w-full h-full object-cover" src="${item.image}" alt="">
        </div>
        <div class="flex flex-col gap-2 ring-2 ring-neutral-100 p-4 rounded-xl hover:ring-[#ffdcdc] transition-all">
            <div class="flex justify-between items-center">
                <div class="text-xs font-medium text-neutral-500">
                ${item.brend}
                </div>
            </div>
            <a href="">${item.name}</a>
        </div>
    </div>
    <div class="flex gap-4">
        <div class="flex gap-4 font-black border-r pr-4 pb-1 text-base">
            <button id="decrease" class="disabled:opacity-50 flex items-center justify-center rounded-full bg-neutral-100 border transition-colors hover:bg-[#ffdcdc] w-8 h-8">-</button>
            <input id="input" type="number" min="0" value="1" class="text-center ring-1 ring-neutral-800  pl-3 w-10 h-8 rounded-md">
            <button id="increase" class="disabled:opacity-50 flex items-center justify-center rounded-full bg-neutral-100 border transition-colors hover:bg-[#ffdcdc] w-8 h-8">+</button>
        </div>
        <button id="deleteItem" class="inline-flex items-center gap-x-2 px-7 h-12 rounded-full ring-2 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-black text-white hover:bg-cosmos hover:text-black ring-black hover:ring-[#ffdcdc] justify-center text-sm h-8 w-8 ">
            <i class="fa-solid fa-trash-can" style="color: #fff;"></i>
        </button>
    </div>
</div>
    `
    emptyBasket.classList.add("hidden")
    order.classList.remove("hidden")

    if (order.style.display!=='hidden') {
        const deleteBtn=document.getElementById("deleteBtn")

        deleteBtn.addEventListener("click",()=>{
           localStorage.removeItem("cartItems")
           location.reload();
        })
    }


    const increaseBtns=document.querySelectorAll("#increase")
    const decreaseBtns=document.querySelectorAll("#decrease")
    const input=document.getElementById("input")
    const deleteItemBtn=document.getElementById("deleteItem")
    
    let countValue=0;
    
    decreaseBtns.forEach((decreaseBtn)=>{

    decreaseBtn.addEventListener("click",()=>{
    
        if (countValue>1) {
            countValue--;
        }
    
        input.value=countValue;
    })
})

  increaseBtns.forEach((increaseBtn,index)=>{
    increaseBtn.addEventListener("click",()=>{
        if (countValue<item.count) {
            countValue++;
        }
        else{
            increaseBtn.disabled=true;
        }
        input.value=countValue;
    })

  })


});





orderBtn.addEventListener("click",()=>{

    localStorage.setItem("orderItems",JSON.stringify(fetchedCardItems))
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
    console.log(fetchedCardItems);
    
    const countBasket=document.getElementById("count")
    
        countBasket.textContent=fetchedCardItems.length;
    
 }
basketcounts()
