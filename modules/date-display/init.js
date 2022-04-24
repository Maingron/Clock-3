meta["date-display"] = {
    "color": "green",
    "name": "Date Display"
}

loadHTMLTemplate("modules/date-display/mytemplate.html");

registerJSRender("day", getDay);
registerJSRender("month", getMonth);
registerJSRender("year", getYear);

registerJSRender("dayOfWeek", getDayOfWeek);
registerJSRender("dayOfWeekString", getDayOfWeekString);

function getDay() {
    /**
    * @returns {number} Day of current month
    */

    return fillEmptyChars((time.getDate()), 2);
}

function getMonth() {
    /**
    * @returns {number} Month of current year
    */

    return fillEmptyChars((time.getMonth() + 1), 2);
}

function getYear() {
    /**
    * @returns {number} Amount of years since death of Jesus
    */

    return time.getFullYear();
}

function getDayOfWeek() {
    /**
    * @returns {number} Day of current Week
    */

    return fillEmptyChars(time.getDay(), 2);
}

function getDayOfWeekString() {
    /**
    * @returns {string} Name of current weekday
    */

    var which = getDayOfWeek();
    switch(which) {
        case "01":
            return "Monday"
        case "02":
            return "Tuesday"
        case "03":
            return "Wednesday"
        case "04":
            return "Thursday"
        case "05":
            return "Friday"
        case "06":
            return "Saturday"
        case "00":
            return "Sunday"
        default:
            return which + " not found. Maybe it's Monday?" // Error if day not found
    }
}
