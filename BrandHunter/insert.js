import products from "/data.js";

const categoryList =document.querySelectorAll("#categoryList")
const colorList =document.getElementById("colorList")
const brendList=document.getElementById("brendList")
const sizeList=document.getElementById("sizeList")

const categories=[...new Set(products.map((product)=>product.category))];
const brends=[... new Set(products.map((product)=>product.brend))];
const colors=[...new Set(products.map((product)=>product.color))];
const sizes=[...new Set(products.map((product)=>product.sizes).flat())];

const productsElement=document.getElementById("products")


// categories.forEach((category)=>{
//     categoryList.innerHTML+=` <li class="w-full"  data-category="${category}">
//     <button class="flex items-center justify-between transition-colors w-full pr-3 py-2 hover:bg-neutral-100 text-sm font-medium pl-3">
//         <span>${category}</span>
//     </button>
//   </li>`
// })

colors.forEach((color)=>{
    colorList.innerHTML+=` <li data-color="${color}">
    <button class="flex items-center justify-between transition-colors w-full p-3 hover:bg-neutral-100">
        <span class="flex  gap-2">
            <span class="w-5 h-5 rounded-full ring-2 ring-neutral-300 ${color==="black" ? "bg-black" : `bg-${color}-500`}"></span>
            <span class="text-sm font-medium">${color}</span>
        </span>
        <img class="w-[8px] hidden checkIcon" src="/assets/icons/check.svg" alt="">
    </button>
</li>`
});

sizes.forEach((size)=>{
    sizeList.innerHTML+=` <li class="w-full" data-size="${size}">
    <button class="flex items-center justify-between transition-colors w-full pr-3 py-2 hover:bg-neutral-100 text-sm font-medium pl-3">
        <span>${size}</span>
        <img class="w-[8px] hidden checkIcon" src="/assets/icons/check.svg" alt="">
    </button>
</li>`
});


brends.forEach((brend)=>{
    brendList.innerHTML+=` <li class="w-full" data-brend="${brend}">
    <button class="flex items-center justify-between transition-colors w-full pr-3 py-2 hover:bg-neutral-100 text-sm font-medium pl-3">
        <span>${brend}</span>
        <img class="w-[8px] hidden checkIcon" src="/assets/icons/check.svg" alt="">
    </button>
</li>`
})


//  products.forEach((product)=>{

//         productsElement.innerHTML+=`
//         <div class="col-span-3">
//         <a href="">
//             <div class="aspect-square max-h-fit rounded-xl overflow-hidden transition-all ring-2 ring-neutral-100 hover:ring-[#ffdcdc]">
//                 <img class="w-full h-full object-cover" src="${product.image}" alt="">
//             </div>
//               <div class="space-y-1">
//                 <div>
//                     <h3 class="text-neutral-900 font-medium text-xs mt-2">${product.name}</h3>
//                </div>
//                <div class="space-x-1">
//                 <span class="font-bold text-sm text-neutral-900">
//                     AZN ${product.price}
//                 </span>
//                </div>
//             </div>
//         </a>
//     </div>
//         `    
//         const productItems=document.querySelectorAll(".productItem")
//         productItems.forEach((productItem,index)=>{
//           productItem.addEventListener("click",(event)=>{
    
//            const selectedProduct=products[index];
    
//            localStorage.setItem("product",JSON.stringify(selectedProduct))
//           })
//         })
    
//     });
    