function handleScroll() {

    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;


    var links = document.getElementsByClassName("nav-link");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var sectionId = link.getAttribute("href");
        var section = document.querySelector(sectionId);

        if (section) {
       
            var rect = section.getBoundingClientRect();
            var sectionPosition = rect.top + scrollPosition-100;
            var sectionHeight = rect.height;

            if (scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionHeight) {
                link.style.color = "blue";
            } else {
                link.style.color = "";
            }
        }
    }
}

window.addEventListener("scroll", handleScroll);

// Function to handle window resize event
function handleResize() {
    handleScroll();
}

window.addEventListener("resize", handleResize);

handleScroll(); // Call handleScroll initially to set the active link on page load
