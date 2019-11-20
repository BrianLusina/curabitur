/**
 * Gets the time in 24 hours
 * @returns {String} time in 24hour format
 */
export const getTime24Hours = (): string => {
    const now = new Date(Date.now());
    let mins: number | string = now.getMinutes();
    let hours: number | string = now.getHours();

    if (mins < 10) {
        mins = `0${mins}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }

    return `${hours}:${mins}`;
};

/**
 * Gets the time in 12 hour format
 * @returns {String} time in 12 hour format
 */
export const getTime12hours = (): string => {
    const now = new Date(Date.now());

    let minutes: number | string = now.getMinutes();
    let hours: number| string = now.getHours();

    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;

    // the hour '0' should be 12
    hours = hours ? hours : "12";

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}${ampm}`;
};