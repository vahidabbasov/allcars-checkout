const cardButton = document.querySelectorAll(".buttonCard button")

cardButton.forEach(element => {
   element.addEventListener("click",()=>{
    const targetURL = "./detail.htm";
    window.location.href = targetURL;
   })
});