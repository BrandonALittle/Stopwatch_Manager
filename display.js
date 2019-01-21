
class Display {
    constructor(owner) {
        this.owner = owner;
        this.id = `display-${owner.id}`;
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        // Render clock
        this.drawDisplay();
    }

    /**
     * Renders clock to DOM.
     */
    drawDisplay() {
        const time = `${this.hours}:${this.minutes}:${this.seconds}`;
        const stopwatch = document.getElementById(this.owner.id);
        const timer = document.createElement('p');
        timer.setAttribute('id', this.id);
        timer.setAttribute('class', 'timer');
        timer.innerHTML = time;
        stopwatch.appendChild(timer);
    }

    /**
     * Gets parsed time in hours/minutes/seconds, updates time in current instance.
     * @param {Number} elapsedTimeInMS
     */
    updateTime(elapsedTimeInMS) {
        const { hours, minutes, seconds } = this.parseMS(elapsedTimeInMS);
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    /**
     * Renders new time on clock.
     */
    updateDisplay() {
        const htmlDisplay = this.htmlDisplay;
        htmlDisplay.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    /**
     * Returns time object (hours/minutes/seconds).
     * @param {Number} milliseconds 
     */
    parseMS(milliseconds) {
        const hours = milliseconds / (1000 * 60 * 60);
        const intHours = Math.floor(hours);
        const hoursAsString = intHours > 9 ? `${intHours}` : `0${intHours}`;

        const minutes = (hours - intHours) * 60;
        const intMinutes = Math.floor(minutes);
        const minutesAsString = intMinutes > 9 ? `${intMinutes}` : `0${intMinutes}`;

        const seconds = (minutes - intMinutes) * 60;
        const intSeconds = Math.floor(seconds);
        const secondsAsString = intSeconds > 9 ? `${intSeconds}` : `0${intSeconds}`;

        return {
            hours: hoursAsString,
            minutes: minutesAsString,
            seconds: secondsAsString
        }
    }

    /**
     * Returns DOM element belonging to current instance.
     */
    get htmlDisplay() {
        return document.getElementById(this.id);
    }
}