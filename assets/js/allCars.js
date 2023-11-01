document.querySelector('#dontShowMap').addEventListener('click', function() {
    const mapElement = document.querySelector('.mapHid');
    const carsWrapperLeft = document.querySelector('.carsWrapperLeft');

    mapElement.classList.toggle('hidden');

    // Check if the map is now hidden
    if (mapElement.classList.contains('hidden')) {
        carsWrapperLeft.style.maxWidth = '1440px';
        carsWrapperLeft.style.flexWrap = 'wrap';
        carsWrapperLeft.style.flexDirection = 'row';
    } else {
        // Reset styles or set them to the original values when map is shown
        carsWrapperLeft.style.maxWidth = '';  // Assuming you want to reset it to default
        carsWrapperLeft.style.flexWrap = '';  // Assuming you want to reset it to default
        carsWrapperLeft.style.flexDirection = '';  // Assuming you want to reset it to default
    }
});
