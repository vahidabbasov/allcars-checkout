


// location bashladi
const cityOnee = document.querySelector(".cityOne");
const cityTwoo = document.querySelector(".cityTwo");
let locationCreated = false;
let locationCreatedd = false;
let newLocation;
let newLocationTwo;


async function createLocation() {
    try {
        cityOnee.addEventListener("click", () => {
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

                cityOnee.appendChild(newLocation);
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
            if (!cityOnee.contains(event.target) && locationCreated) {
                newLocation.remove();
                locationCreated = false;
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
async function createLocationTwo() {
    try {
        cityTwoo.addEventListener("click", () => {
            if (!locationCreatedd) {
                newLocationTwo = document.createElement('div');
                newLocationTwo.classList = "locationn";
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






                newLocationTwo.appendChild(currenLocation)

                newLocationTwo.appendChild(previousOne)

                newLocationTwo.appendChild(previousTwo)

                newLocationTwo.appendChild(transport)

                newLocationTwo.appendChild(dayHours)

                newLocationTwo.appendChild(google)

                cityTwoo.appendChild(newLocationTwo);
                locationCreatedd = true;
                newLocationTwo.addEventListener("click", (event) => {
                    event.stopPropagation();
                });
            } else {
                newLocationTwo.remove();
                locationCreatedd = false;
            }
        });

        document.addEventListener("click", (event) => {
            if (!cityTwoo.contains(event.target) && locationCreatedd) {
                newLocationTwo.remove();
                locationCreatedd = false;
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}


createLocation();

createLocationTwo();

// location bitdi 



// dil bashladi

const langg = document.getElementById("lang")
const language = document.getElementById("language")
let langCreated = false;
let newLang;



async function createLang() {
    try {
        langg.addEventListener("click", () => {
            if (!langCreated) {
                newLang = document.createElement('div');
                newLang.classList = "newLang";
                const newLangAll = document.createElement("ul")
                newLangAll.classList = "langList"
                const newLangEn = document.createElement("li")
                newLangEn.innerHTML = "EN"
                newLangEn.addEventListener("click", () => {
                    language.innerHTML = "EN"
                })
                const newLangAz = document.createElement("li")
                newLangAz.innerHTML = "AZE"
                newLangAz.addEventListener("click", () => {
                    language.innerHTML = "AZE"
                })
                const newLangRu = document.createElement("li")
                newLangRu.innerHTML = "RU"
                newLangRu.addEventListener("click", () => {
                    language.innerHTML = "RU "
                })
                newLangAll.appendChild(newLangAz)
                newLangAll.appendChild(newLangRu)
                newLangAll.appendChild(newLangEn)
                newLang.appendChild(newLangAll);
                langg.appendChild(newLang);
                langCreated = true;
                newLang.addEventListener("click", (event) => {
                    event.stopPropagation();
                });
            } else {
                newLang.remove();
                langCreated = false;
            }
        });

        document.addEventListener("click", (event) => {
            if (!langg.contains(event.target) && langCreated) {
                newLang.remove();
                langCreated = false;
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
createLang()

// lang bitdi

// saat bashladi 

const arrowOne = document.getElementById("arrowOne")
const clockFirst = document.getElementById("clockFirst")
const clockValueFirst = document.getElementById("clockValueFirst")

const arrowTwo = document.getElementById("arrowTwo")
const clockSecond = document.getElementById("clockSecond")
const clockValueSecond = document.getElementById("clockValueSecond")

let clockCreated = false;
let newClock;

let clockCreatedTwo = false;
let newClockTwo;


async function createClock() {
    try {
        arrowOne.addEventListener("click", () => {
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

                            clockValueFirst.innerHTML = listItem.innerHTML;
                        });
                    }



                }








                newClock.appendChild(newClockUl);
                clockFirst.appendChild(newClock);
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
            if (!clockFirst.contains(event.target) && clockCreated) {
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
        arrowTwo.addEventListener("click", () => {
            if (!clockCreatedTwo) {
                newClockTwo = document.createElement('div');
                newClockTwo.classList = "newClock";
                const newClockUlTwo = document.createElement("ul")
                newClockUlTwo.classList = "newClockUl"
                for (let hour = 0; hour <= 23; hour++) {
                    for (let minute = 0; minute < 60; minute += 30) {
                        const formattedHour = hour.toString().padStart(2, '0');
                        const formattedMinute = minute.toString().padStart(2, '0');
                        const time = `${formattedHour}:${formattedMinute}`;

                        const listItem = document.createElement('li');
                        listItem.textContent = time;

                        newClockUlTwo.appendChild(listItem);
                        listItem.addEventListener("click", () => {

                            clockValueSecond.innerHTML = listItem.innerHTML;
                        });
                    }
                }

                newClockTwo.appendChild(newClockUlTwo);
                clockSecond.appendChild(newClockTwo);
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
            if (!clockSecond.contains(event.target) && clockCreatedTwo) {
                newClockTwo.remove();
                clockCreatedTwo = false;
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}


createClockTwo()
createClock()

// saat bitdi 

// calendar bashladi 

const arrowCalendarTwo = document.getElementById("arrowCalendarTwo");
const calendarSecond = document.getElementById("calendarSecond");
const calendarValueSecond = document.getElementById("calendarValueSecond");
const calendarValueFirst = document.getElementById("calendarValueFirst");


let calendarCreatedTwo = false;
let newCalendarTwo;

let calendarCreated = false;
let newCalendar;


const arrowCalendarOne = document.getElementById("arrowCalendarOne");
const calendarFirst = document.getElementById("calendarFirst");

async function createCalendar() {
    try {
        arrowCalendarOne.addEventListener("click", () => {
            if (!calendarCreated) {
                newCalendar = document.createElement('div');
                newCalendar.classList = "newCalendar";
                calendarFirst.appendChild(newCalendar);
                calendarCreated = true;


                $(newCalendar).datepicker({
                    onSelect: function (dateText) {
                        calendarValueFirst.innerHTML = dateText;
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
            if (!calendarFirst.contains(event.target) && calendarCreated) {
                newCalendar.remove();
                calendarCreated = false;
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
async function createCalendarTwo() {
    try {
        arrowCalendarTwo.addEventListener("click", () => {
            if (!calendarCreatedTwo) {
                newCalendarTwo = document.createElement('div');
                newCalendarTwo.classList = "newCalendar";
                calendarSecond.appendChild(newCalendarTwo);
                calendarCreatedTwo = true;


                $(newCalendarTwo).datepicker({
                    onSelect: function (dateText) {
                        calendarValueFirst.innerHTML = dateText;
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
            if (!calendarSecond.contains(event.target) && calendarCreatedTwo) {
                newCalendarTwo.remove();
                calendarCreatedTwo = false;
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}


createCalendar();
createCalendarTwo();
