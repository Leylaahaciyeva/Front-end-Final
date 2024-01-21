"use strict";

const cartList=document.getElementById("cartList")
const emptyBasket =document.querySelector(".emptyBasket")
const order=document.querySelector(".order")

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
            <button class="disabled:opacity-50 flex items-center justify-center rounded-full bg-neutral-100 border transition-colors hover:bg-[#ffdcdc] w-8 h-8">-</button>
            <input type="text" class="text-center ring-1 ring-neutral-800  pl-3 w-10 h-8 rounded-md">
            <button class="disabled:opacity-50 flex items-center justify-center rounded-full bg-neutral-100 border transition-colors hover:bg-[#ffdcdc] w-8 h-8">+</button>
        </div>
        <button class="inline-flex items-center gap-x-2 px-7 h-12 rounded-full ring-2 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-black text-white hover:bg-cosmos hover:text-black ring-black hover:ring-[#ffdcdc] justify-center text-sm h-8 w-8 ">
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

});



