let isDragging = false;
let startX;
let scrollLeft;

document.getElementById('cards').addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - document.getElementById('cards').offsetLeft;
    scrollLeft = document.getElementById('cards').scrollLeft;
    document.getElementById('cards').style.cursor = 'grabbing'; 
});

document.getElementById('cards').addEventListener('mouseleave', () => {
    isDragging = false;
    document.getElementById('cards').style.cursor = 'grab';
});

document.getElementById('cards').addEventListener('mouseup', () => {
    isDragging = false;
    document.getElementById('cards').style.cursor = 'grab';
});

document.getElementById('cards').addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - document.getElementById('cards').offsetLeft;
    const walk = (x - startX) * 3; 
    document.getElementById('cards').scrollLeft = scrollLeft - walk;
});
