
import products from "/data.js";


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