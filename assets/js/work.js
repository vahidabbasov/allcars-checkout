const workImg = document.getElementById("workImg")
const firstText = document.getElementById("firstText")
const secondText = document.getElementById("secondText")
const thirdText = document.getElementById("thirdText")

firstText.addEventListener("mouseover",()=>{
  
    workImg.style.backgroundImage="url(/assets/images/WhatsApp\ Image\ 2023-08-17\ at\ 12.33\ 1.png)"
})
secondText.addEventListener("mouseover",()=>{
    workImg.style.backgroundImage="url(/assets/images/DnEYScAU0AAazqy.png"
})

secondText.addEventListener("mouseout",()=>{
    workImg.style.backgroundImage="url(/assets/images/work.png)"
})
thirdText.addEventListener("mouseover",()=>{
    workImg.style.backgroundImage="url(/assets/images/third.png)"
})

thirdText.addEventListener("mouseout",()=>{
    workImg.style.backgroundImage="url(/assets/images/work.png)"
})