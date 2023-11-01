

document.addEventListener("DOMContentLoaded", function() {
    // create calendar
    
    const startDateArrow = document.getElementById("startDateArrow")
    const tripStartDate = document.getElementById("tripStartDate")
    const startDateValue = document.getElementById("startDate")
    
    
    let calendarCreated = false;
    let newCalendar;
    
    
    const endDateArrow = document.getElementById("endDateArrow")
    const tripEndDate = document.getElementById("tripEndDate")
    const endDateValue = document.getElementById("endDate")
    
    
    let calendarCreatedTwo = false;
    let newCalendarTwo;
    
    
    
    
    async function createCalendar() {
        try {
            startDateArrow.addEventListener("click", () => {
                if (!calendarCreated) {
                    newCalendar = document.createElement('div');
                    newCalendar.classList = "newCalendar";
                    tripStartDate.appendChild(newCalendar);
                    calendarCreated = true;
    
                   
                    $(newCalendar).datepicker({
                        onSelect: function(dateText) {
                            startDateValue.innerHTML = dateText;
                        }
                    });
    
                    newCalendar.addEventListener("click", (event) => {
                        event.stopPropagation();
                    });
                } else {
                    newCalendar.remove();
                    calendarCreated = false;
                }
            });
    
            document.addEventListener("click", (event) => {
                if (!tripStartDate.contains(event.target) && calendarCreated) {
                    newCalendar.remove();
                    calendarCreated = false;
                }
            });
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
    
    
    createCalendar()
    
    
    
    // createCalednar end
    
    
    
    
    
    async function createCalendarTwo() {
        try {
            endDateArrow.addEventListener("click", () => {
                if (!calendarCreatedTwo) {
                    newCalendarTwo = document.createElement('div');
                    newCalendarTwo.classList = "newCalendar";
                    tripEndDate.appendChild(newCalendarTwo);
                    calendarCreatedTwo = true;
    
                    $(newCalendarTwo).datepicker({
                        onSelect: function(dateText) {
                            endDateValue.innerHTML = dateText;
                        }
                    });
    
                    newCalendarTwo.addEventListener("click", (event) => {
                        event.stopPropagation();
                    });
                } else {
                    newCalendarTwo.remove();
                    calendarCreatedTwo = false;
                }
            });
    
            document.addEventListener("click", (event) => {
                if (!tripEndDate.contains(event.target) && calendarCreatedTwo) {
                    newCalendarTwo.remove();
                    calendarCreatedTwo = false;
                }
            });
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
    
    
    createCalendarTwo()
    
    // calendar bitdi
    
    
    const selection = document.getElementById("selection")
    
    
    const selectionArrow = document.getElementById("locationArrow")
    
    let locationCreated = false;
    let newLocation;
    
    
    async function createLocation() {
        try {
            selectionArrow.addEventListener("click", () => {
                if (!locationCreated) {
                    newLocation = document.createElement('div');
                    newLocation.classList = "locationn";
    
                    const currenLocation = document.createElement("div")
                    currenLocation.classList.add("curentLocation")
                    currenLocation.classList.add("locationItem")
    
                    const currentImg = document.createElement("img")
                    currentImg.src = "./assets/images/VectorCurrent.svg"
    
                    const currentText = document.createElement("p")
                    currentText.innerHTML = "Current location"
    
    
                    currenLocation.appendChild(currentImg)
                    currenLocation.appendChild(currentText)
    
                    const previousOne = document.createElement("div")
                    previousOne.classList.add("previousOne")
                    previousOne.classList.add("locationItem")
    
    
                    const previouOneImg = document.createElement("img")
                    previouOneImg.src = "./assets/images/Clock Circle.svg"
    
                    const previousOneText = document.createElement("p")
                    previousOneText.innerHTML = "Baku"
    
    
                    previousOne.appendChild(previouOneImg)
                    previousOne.appendChild(previousOneText)
    
                    const previousTwo = document.createElement("div")
                    previousTwo.classList.add("previousYwo")
                    previousTwo.classList.add("locationItem")
    
                    const previouTwoImg = document.createElement("img")
                    previouTwoImg.src = "./assets/images/Clock Circle.svg"
    
                    const previousTwoText = document.createElement("p")
                    previousTwoText.innerHTML = "Gabala"
    
    
                    previousTwo.appendChild(previouTwoImg)
                    previousTwo.appendChild(previousTwoText)
    
                    const transport = document.createElement("div")
                    transport.classList.add("transport")
                    transport.classList.add("locationItem")
    
                    const transportImg = document.createElement("img")
                    transportImg.src = "./assets/images/Tram.svg"
    
                    const transportText = document.createElement("p")
                    transportText.innerHTML = "Ganja"
    
    
                    transport.appendChild(transportImg)
                    transport.appendChild(transportText)
    
    
                    const dayHours = document.createElement("div")
                    dayHours.classList.add("dayHours")
                    dayHours.classList.add("locationItem")
    
    
    
                    const dayHoursImg = document.createElement("img")
                    dayHoursImg.src = "./assets/images/Bath.svg"
    
                    const dayHoursText = document.createElement("p")
                    dayHoursText.innerHTML = "Lankaran Spring Welness Resort"
    
    
                    dayHours.appendChild(dayHoursImg)
                    dayHours.appendChild(dayHoursText)
    
    
    
    
    
                    const google = document.createElement("div")
                    google.classList.add("google")
                    google.classList.add("locationItem")
    
    
                    const googleImg = document.createElement("img")
                    googleImg.src = "./assets/images/logos_google.svg"
    
                    const googleText = document.createElement("p")
                    googleText.innerHTML = "powered by"
                    googleText.classList.add("googleText")
    
    
                    google.appendChild(googleText)
                    google.appendChild(googleImg)
    
    
    
    
    
    
                    newLocation.appendChild(currenLocation)
    
                    newLocation.appendChild(previousOne)
    
                    newLocation.appendChild(previousTwo)
    
                    newLocation.appendChild(transport)
    
                    newLocation.appendChild(dayHours)
    
                    newLocation.appendChild(google)
    
                    selection.appendChild(newLocation);
                    locationCreated = true;
                    newLocation.addEventListener("click", (event) => {
                        event.stopPropagation();
                    });
                } else {
                    newLocation.remove();
                    locationCreated = false;
                }
            });
    
            document.addEventListener("click", (event) => {
                if (!selection.contains(event.target) && locationCreated) {
                    newLocation.remove();
                    locationCreated = false;
                }
            });
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
    createLocation()
    
    // location bitdi
    
    // saat bashladi
    
    
    const startTimeArrow = document.getElementById("startTimeArrow")
    const tripStartTime = document.getElementById("tripStartTime")
    const startTime = document.getElementById("startTime")
    
    const endTimeArrow = document.getElementById("endTimeArrow")
    const tripEndTime = document.getElementById("tripEndTime")
    const endTime = document.getElementById("endTime")
    
    let clockCreated = false;
    let newClock;
    
    let clockCreatedTwo = false;
    let newClockTwo;
    
    
    async function createClock() {
        try {
            startTimeArrow.addEventListener("click", () => {
                if (!clockCreated) {
                    newClock = document.createElement('div');
                    newClock.classList = "newClock";
                    const newClockUl = document.createElement("ul")
                    newClockUl.classList = "newClockUl"
                    for (let hour = 0; hour <= 23; hour++) {
                        for (let minute = 0; minute < 60; minute += 30) {
                            const formattedHour = hour.toString().padStart(2, '0');
                            const formattedMinute = minute.toString().padStart(2, '0');
                            const time = `${formattedHour}:${formattedMinute}`;
    
                            const listItem = document.createElement('li');
                            listItem.classList.add("listItem")
                            listItem.textContent = time;
    
                            newClockUl.appendChild(listItem);
                            listItem.addEventListener("click", () => {
    
                                startTime.innerHTML = listItem.innerHTML;
                            });
                        }
    
    
    
                    }
    
    
    
    
    
    
    
    
                    newClock.appendChild(newClockUl);
                    tripStartTime.appendChild(newClock);
                    clockCreated = true;
                    newClock.addEventListener("click", (event) => {
                        event.stopPropagation();
                    });
                } else {
                    newClock.remove();
                    clockCreated = false;
                }
            });
    
            document.addEventListener("click", (event) => {
                if (!tripStartTime.contains(event.target) && clockCreated) {
                    newClock.remove();
                    clockCreated = false;
                }
            });
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
    
    
    async function createClockTwo() {
        try {
            endTimeArrow.addEventListener("click", () => {
                if (!clockCreatedTwo) {
                    newClockTwo = document.createElement('div');
                    newClockTwo.classList = "newClock";
                    const newClockTwoUl = document.createElement("ul")
                    newClockTwoUl.classList = "newClockUl"
                    for (let hour = 0; hour <= 23; hour++) {
                        for (let minute = 0; minute < 60; minute += 30) {
                            const formattedHour = hour.toString().padStart(2, '0');
                            const formattedMinute = minute.toString().padStart(2, '0');
                            const time = `${formattedHour}:${formattedMinute}`;
    
                            const listItem = document.createElement('li');
                            listItem.classList.add("listItem")
                            listItem.textContent = time;
    
                            newClockTwoUl.appendChild(listItem);
                            listItem.addEventListener("click", () => {
    
                                endTime.innerHTML = listItem.innerHTML;
                            });
                        }
    
    
    
                    }
    
    
    
    
    
    
    
    
                    newClockTwo.appendChild(newClockTwoUl);
                    tripEndTime.appendChild(newClockTwo);
                    clockCreatedTwo = true;
                    newClockTwo.addEventListener("click", (event) => {
                        event.stopPropagation();
                    });
                } else {
                    newClockTwo.remove();
                    clockCreatedTwo = false;
                }
            });
    
            document.addEventListener("click", (event) => {
                if (!tripEndTime.contains(event.target) && clockCreatedTwo) {
                    newClockTwo.remove();
                    clockCreatedTwo = false;
                }
            });
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
    
    createClock()
    
    createClockTwo()
    
    });
    