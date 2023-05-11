//------------------------------//
//  CLOCK WIDGET FUNCTIONALITY  //
//------------------------------//
    //GET CLOCK WIDGET
    let clockWidgetTime = document.getElementById("clock-widget-time");
    let clockWidgetDate = document.getElementById("clock-widget-date");

    // CREATE ARRAYS FOR NAMES OF THE DAYS OF THE WEEK AND MONTHS OF THE YEAR
    // JavaScript lists them as numbers by default, but we want to display their actual names
    let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // UPDATE THE CLOCK WIDGET
    setClockWidget();

    
//-----------//
// FUNCTIONS //
//-----------//
function setClockWidget() {
    // TIMEOUT TO UPDATE CLOCK WIDGET DATE AND TIME EVERY MINUTE (i.e. every 60000 milliseconds)
    // Clock may have an update delay of anywhere between 3 - 48 seconds depending on the device (amongst other factors?)
    // No delay was experienced with a setInterval and a time of 1000ms; but I chose not to resort to that.
    const clockTimeout = setTimeout(function(){ setClockWidget() }, 60000);

    // GET CURRENT DATE AND TIME (OF THE ACTIVE BROWSER)
    let currentDateAndTime = new Date();
    let currentHours = currentDateAndTime.getHours();
    let currentMinutes = currentDateAndTime.getMinutes();
    
    let currentDayOfWeek = currentDateAndTime.getDay();
    let currentMonth = currentDateAndTime.getMonth();
    let currentDayOfMonth = currentDateAndTime.getDate();
    let currentYear = currentDateAndTime.getFullYear();
    
        // SET TIME (DEFAULT 24-HOUR FORMAT)
        // Not comfortable with ternary operators as yet... will update when I've learned more!
        if (currentMinutes < 10) {
            clockWidgetTime.innerText = (currentHours + " : " + "0" + currentMinutes);
        }
        else {
            clockWidgetTime.innerText = (currentHours + " : " + currentMinutes);
        }

        // SET DATE (FULL DAY OF WEEK, FULL MONTH + DAY, FULL YEAR)
        clockWidgetDate.innerText = 
        daysOfWeek[currentDayOfWeek] + ", " + monthsOfYear[currentMonth] + " " + currentDayOfMonth + ", " + currentYear;
    }


