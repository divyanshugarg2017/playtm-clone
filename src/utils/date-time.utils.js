export const formatTime = (time) => {
    let hours = parseInt(time.split(':')[0]);
    let minutes = time.split(':')[1];
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
};

export const generateDateObjects = () => {
    const result = [];
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 0; i < 6; i++) {
        const currentDate = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));
        const day = i === 0 ? "Today" : i === 1 ? "Tomorrow" : daysOfWeek[currentDate.getUTCDay()];
        const apiDay = daysOfWeek[currentDate.getUTCDay()];
        const date = currentDate.getUTCDate();
        const mon = months[currentDate.getUTCMonth()];
        const value = `${(date < 9 ? '0' : '')}${date}-${(currentDate.getUTCMonth()<9 ? '0':'')}${currentDate.getUTCMonth() + 1}-${currentDate.getUTCFullYear()}`;
        result.push({ day, date, mon, value, apiDay });
    }

    return result;
}

export const formatDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let dateObject = new Date(date);
    return {
        month: monthNames[dateObject.getMonth()],
        date: dateObject.getDate()
    };
}

export const getDaysRangeDetails = (detes) => {
    const startDate = new Date(detes.startDate);
    const endDate = new Date(detes.endDate);

    const daysOfWeek = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const monthName = months[startDate.getMonth()];
    let dayRange = `${startDate.getDate()}`;
    if (startDate.getDate() % 10 === 1 && startDate.getDate() !== 11) {
        dayRange += "st";
    } else if (startDate.getDate() % 10 === 2 && startDate.getDate() !== 12) {
        dayRange += "nd";
    } else if (startDate.getDate() % 10 === 3 && startDate.getDate() !== 13) {
        dayRange += "rd";
    } else {
        dayRange += "th";
    }

    if (startDate.getMonth() === endDate.getMonth()) {
        if (startDate.getDate() !== endDate.getDate()) {
            let endDay = `${endDate.getDate()}`;
            if (endDate.getDate() % 10 === 1 && endDate.getDate() !== 11) {
                endDay += "st";
            } else if (endDate.getDate() % 10 === 2 && endDate.getDate() !== 12) {
                endDay += "nd";
            } else if (endDate.getDate() % 10 === 3 && endDate.getDate() !== 13) {
                endDay += "rd";
            } else {
                endDay += "th";
            }
            dayRange += `-${endDay}`;
        }
    } else {
        let endDay = `${endDate.getMonth() === 2 && endDate.getDate() === 29 ? 28 : endDate.getDate()}`;
        if (endDay % 10 === 1 && endDay !== 11) {
            endDay += "st";
        } else if (endDay % 10 === 2 && endDay !== 12) {
            endDay += "nd";
        } else if (endDay % 10 === 3 && endDay !== 13) {
            endDay += "rd";
        } else {
            endDay += "th";
        }
        dayRange += `-${endDay}`;
    }

    let startDay = daysOfWeek[startDate.getUTCDay()];
    let startMonth = months[startDate.getUTCMonth()];
    let startDayOfMonth = `${startDate.getUTCDate()}`;
    if (startDate.getUTCDate() % 10 === 1 && startDate.getUTCDate() !== 11) {
        startDayOfMonth += "st";
    } else if (startDate.getUTCDate() % 10 === 2 && startDate.getUTCDate() !== 12) {
        startDayOfMonth += "nd";
    } else if (startDate.getUTCDate() % 10 === 3 && startDate.getUTCDate() !== 13) {
        startDayOfMonth += "rd";
    } else {
        startDayOfMonth += "th";
    }

    let endDay = daysOfWeek[endDate.getUTCDay()];
    let endMonth = months[endDate.getUTCMonth()];
    let endDayOfMonth = `${endDate.getUTCDate()}`;
    if (endDate.getUTCDate() % 10 === 1 && endDate.getUTCDate() !== 11) {
        endDayOfMonth += "st";
    } else if (endDate.getUTCDate() % 10 === 2 && endDate.getUTCDate() !== 12) {
        endDayOfMonth += "nd";
    } else if (endDate.getUTCDate() % 10 === 3 && endDate.getUTCDate() !== 13) {
        endDayOfMonth += "rd";
    } else {
        endDayOfMonth += "th";
    }

    return {
        month: monthName,
        dayRange,
        dateRange: `${startDay}, ${startDayOfMonth} ${startMonth} - ${endDay}, ${endDayOfMonth} ${endMonth}`,
    };
};

export const timeStampFormatter = (unixTimestamp) => {
    const date = new Date(unixTimestamp);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return `${date.getDate()}, ${formattedDate.split(" ")[1]} ${date.getFullYear()}`;
};