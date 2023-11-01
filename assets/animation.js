const select = document.getElementById("select")
const selectText = document.getElementById("selectText")
const cityOne = document.querySelector(".cityOne")
const cityTwo = document.querySelector(".cityTwo")
const city = document.querySelector(".city")
const datee = document.querySelector(".date")
const mainCont = document.querySelector(".mainCont")
const changeText = document.querySelector(".changeText")
const mainSearch = document.querySelector(".mainSearch")
const selectAlt = document.querySelector(".selectAlt")
const car2 = document.querySelector(".car2")
const text2 = document.querySelector(".text2")
let clicked = 0
select.addEventListener("click",()=>{
    if (clicked === 0) {
        async function addNew() {
            selectAlt.classList.add("selectAltOpen")
            mainSearch.classList.add("searchOpen")
            cityOne.classList.add("close")
            changeText.style.opacity="0"
            selectText.style.opacity = "0";
            selectText.classList.add("selectTextOpen")
           
           
              city.classList.add("cityOpen")
              setTimeout(() => {
                
                  changeText.textContent="From?"
                  
                  changeText.style.opacity="1"
                  selectText.textContent = "Different drop-off";
                  selectText.style.opacity = "1";
                 
               
              }, 150);
             
            await new Promise(resolve => setTimeout(resolve, 100)); 
            cityTwo.classList.add("open")
            mainCont.classList.add("mainContOpen")

        
           car2.classList.add("transition")

        }
        
        addNew();
        clicked=1
        
    } else if (clicked === 1) {
        
        async function removeNew() {
            selectAlt.classList.remove("selectAltOpen")
            selectText.classList.remove("selectTextOpen")
            cityOne.classList.remove("close")
            changeText.style.opacity="0"
            mainSearch.classList.remove("searchOpen")
       
            selectText.style.opacity = "0";
              city.classList.remove("cityOpen")
              setTimeout(() => {
                
                  changeText.textContent="City, airport, address or hotel"
                  changeText.style.opacity="1"
                  selectText.textContent = "Same drop-off";
                  selectText.style.opacity = "1";
                 
               
             
              }, 150);
            await new Promise(resolve => setTimeout(resolve, 100)); 
            cityTwo.classList.remove("open")
            mainCont.classList.remove("mainContOpen")
 
        }
        removeNew()
        clicked=0
    }

   

 

  
})

