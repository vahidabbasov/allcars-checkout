const element = document.getElementById("cards");
let scrollInterval;

function scrollRight() {
  const elementRect = element.getBoundingClientRect();
  const isVisible = elementRect.left < window.innerWidth && elementRect.right > 0;

  if (isVisible) {
    const scrollAmount = element.scrollLeft + 1000; 

    if (scrollAmount >= element.scrollWidth - element.clientWidth) {
      element.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      element.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}

const observer = new IntersectionObserver((entries) => {
  const isVisible = entries[0].isIntersecting;
  if (isVisible) {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(scrollRight, 5000); 
  }
});

element.addEventListener('scroll', () => {
  clearInterval(scrollInterval); 
  scrollInterval = setInterval(scrollRight, 5000); 
});

element.addEventListener('click', () => {
  clearInterval(scrollInterval); 
  scrollInterval = setInterval(scrollRight, 5000);
});

observer.observe(element);

const maxIterations = 10;
let iterations = 0;
