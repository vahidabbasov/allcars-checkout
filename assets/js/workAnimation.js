const textNum = document.querySelectorAll(".textNum");

textNum.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("textOver");
        const circlee = element.querySelector(".circlee");

        if (circlee) {
            circlee.classList.add("textOverBorder");
        }
    });
});



textNum.forEach(element => {
    element.addEventListener("mouseout", () => {
        element.classList.remove("textOver");
        const circlee = element.querySelector(".circlee");

        if (circlee) {
            circlee.classList.remove("textOverBorder");
        }
    });
});

