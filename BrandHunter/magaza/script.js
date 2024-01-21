"use strict";

import products from "../data.js";

const filterBtns=document.querySelectorAll(".filterBtn")
const filters=document.querySelectorAll(".filter")
const plusIcons=document.querySelectorAll(".plusIcon")
const categoryTypes=document.querySelectorAll(".categoryType")
const categoryBtns=document.querySelectorAll(".categoryBtn")
const chevronIcons=document.querySelectorAll(".chevronIcon")

const checkIcons=document.querySelectorAll(".checkIcon")

const categoryItems=document.querySelectorAll(".categoryType li")
const brendItems=document.querySelectorAll("#brendList li")
const sizeItems=document.querySelectorAll("#sizeList li")
const colorItems=document.querySelectorAll("#colorList li")

const productsElement=document.getElementById("products")

const clearBtn=document.getElementById("clearBtn")

const filteredCategories=[];
const filteredBrends=[];
const filteredColors=[];
const filteredSizes=[];


filterBtns.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
      filters[index].classList.toggle("hidden");
      filterBtns[index].classList.toggle("rounded-b")
      
      if(plusIcons[index].innerHTML==='-'){
        plusIcons[index].innerHTML='+';
      }
      else{
        plusIcons[index].innerHTML='-';
      }
    })
});


categoryBtns.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    categoryTypes[index].classList.toggle("hidden")
    chevronIcons[index].classList.toggle("-rotate-180")
  })
})


categoryItems.forEach((item)=>{
  item.addEventListener("click",()=>{

    products.forEach((product)=>{
      let categorytype=product.categorytype;

      if(filteredCategories.includes(categorytype)){
        const indexOfCategory = filteredCategories.indexOf(categorytype);

        filteredCategories.splice(indexOfCategory,1);
    }
    else{
        filteredCategories.push(categorytype)
    }

    console.log(filteredCategories);


    })

      displayProducts()
  })

});

brendItems.forEach((item,index)=>{
  item.addEventListener("click",()=>{
 
    checkIcons[index].classList.toggle("hidden")

      const { brend }=item.dataset;

      if(filteredBrends.includes(brend)){
          const indexOfBrend= filteredBrends.indexOf(brend);

          filteredBrends.splice(indexOfBrend,1);
      }
      else{
          filteredBrends.push(brend)
      }

      console.log(filteredBrends);

      displayProducts()
  })

});


colorItems.forEach((item,index,array)=>{
  item.addEventListener("click",()=>{

    checkIcons[index].classList.toggle("hidden")

      const { color }=item.dataset;

      if(filteredColors.includes(color)){
          const indexOfColors=filteredColors.indexOf(color);
          filteredColors.splice(indexOfColors,1);
      }
      else{
          filteredColors.push(color)
      }

      console.log(filteredColors);

      displayProducts()
  })
});

sizeItems.forEach((item,index,array)=>{
  item.addEventListener("click",()=>{

    checkIcons[index].classList.toggle("hidden")

      const {size}=item.dataset;

      if(filteredSizes.includes(size)){
          const indexOfSizes=filteredSizes.indexOf(size);
          filteredSizes.splice(indexOfSizes,1);
      }
      else{
          filteredSizes.push(size)
      }

      console.log(filteredSizes);
      displayProducts()
  })
});


const displayProducts=()=>{
  const filteredProducts=products.filter((product)=>
  {
      if(filteredCategories.length === 0 && filteredBrends.length===0 && filteredColors.length === 0 && filteredSizes.length === 0)
      return true;

      const categoryCondition=filteredCategories.length ===0 || filteredCategories.includes(product.category);
      const colorCondition=filteredColors.length===0 || filteredColors.includes(product.color);
      const sizeCondition=filteredSizes.length === 0 || product.sizes.some((size)=>filteredSizes.includes(size))
      const brendCondition=filteredBrends.length===0 || filteredBrends.includes(product.brend)

      return colorCondition && categoryCondition && sizeCondition && brendCondition;

  })


  productsElement.innerHTML="";

  filteredProducts.forEach((product)=>{
  
     productsElement.innerHTML+=` 
     <div class="col-span-3 productItem ">
     <a href="/productPage/productPage.html">
         <div class="aspect-square max-h-fit rounded-xl overflow-hidden transition-all ring-2 ring-neutral-100 hover:ring-[#ffdcdc]">
             <img class="w-full h-full object-cover" src="${product.image}" alt="">
         </div>
           <div class="space-y-1">
             <div>
                 <h3 class="text-neutral-900 font-medium text-xs mt-2">
                 ${product.name}
             </h3>
            </div>
            <div class="space-x-1">
             <span class="font-bold text-sm text-neutral-900">
                 AZN ${product.price}
             </span>
            </div>
         </div>
     </a>
    </div>
 `
  
     const productItems=document.querySelectorAll(".productItem")
     productItems.forEach((productItem,index)=>{
       productItem.addEventListener("click",(event)=>{
  
        const selectedProduct=filteredProducts[index];
  
        // window.location.href="productPage/productPage.html"
        localStorage.setItem("product",JSON.stringify(selectedProduct))
       })
     })
  
  });

};
displayProducts();

// clearBtn.addEventListener("click",()=>{

// })