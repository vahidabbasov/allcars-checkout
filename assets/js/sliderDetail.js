
    const image1 = document.querySelector(".image1")
    const image2 = document.querySelector(".image2")
    const image3 = document.querySelector(".image3")
    const image4 = document.querySelector(".image4")
    
    const rightBtn = document.getElementById("rightBtn")
    const leftBtn = document.getElementById("leftBtn")
    
    
    const currentCount = document.getElementById("currentCount")
    const allCount = document.getElementById("allCount")
    
    
    let arr = [image1, image2, image3, image4]
    allCount.innerHTML=arr.length
    let i = 1
    
    leftBtn.addEventListener("click", () => {
        console.log("oldu")
    if (i >= 0) {
    i = (i - 1 + arr.length) % arr.length;
    
    currentCount.innerHTML=i
    if (i===0) {
        currentCount.innerHTML=arr.length
    }
    
    arr.forEach((element) => {
        element.classList.remove("current", "prev", "next");
    });
    
    arr[i].classList.add("current");
    arr[(i - 1 + arr.length) % arr.length].classList.add("prev");
    arr[(i + 1) % arr.length].classList.add("next");
    }
    
    });
    
    rightBtn.addEventListener("click", () => {
    if (i >= 0) {
    i = (i + 1) % arr.length;
    currentCount.innerHTML=i
    if (i===0) {
        currentCount.innerHTML=arr.length
    }
    arr.forEach((element) => {
        element.classList.remove("current", "prev", "next");
    });
    
    arr[i].classList.add("current");
    arr[(i - 1 + arr.length) % arr.length].classList.add("prev");
    arr[(i + 1) % arr.length].classList.add("next");
    }
    });