const fav = document.querySelectorAll(".fav");

fav.forEach(element => {
    element.addEventListener("click", () => {
        const favIcon = element.querySelector(".favIcon"); 
        if (favIcon.classList.contains("favIconActive")) {
            favIcon.classList.remove("fa-solid","favIconActive");
            favIcon.classList.add("fa-regular");
        } else {
            favIcon.classList.add("fa-solid","favIconActive");
            favIcon.classList.remove("fa-regular");
        }
    });
});
