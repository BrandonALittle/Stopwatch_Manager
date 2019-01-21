
class Stopwatch {
    constructor(index) {
        this.id = `stopwatch-${index}`;
        this.isRunning = false; 
        this.elapsedTime = 0; 
        this.previousTime = Date.now();
        // Render stopwatch; create Display and Controls
        this.drawStopwatch();
        this.display = new Display(this);
        this.controls = new Controls(this);
        this.intervalID = setInterval(() => {this.tick()}, 100);
    }

    /**
     * Runs clock if stopwatch is in running state. Updates time and displays new time.
     */
    tick() {
        if (this.isRunning) {
            const now = Date.now();
            this.elapsedTime = this.elapsedTime + (now - this.previousTime);
            this.previousTime = now;  
        }
        this.display.updateTime(this.elapsedTime);
        this.display.updateDisplay();
    }

    /**
     * Starts and stops (pauses) clock;
     */
    startStop() {
        if (!this.isRunning) {
            this.previousTime = Date.now();
        }
        this.isRunning = !this.isRunning;
    }

    /**
     * Resets clock to zero;
     */
    reset() {
        this.elapsedTime = 0;
    }

    /**
     * Removes stopwatch from page and clears interval.
     */
    terminate() {
        clearInterval(this.intervalID);
        const stopwatchContainer = document.getElementById('stopwatch-container');
        const stopwatch = document.getElementById(this.id);
        stopwatchContainer.removeChild(stopwatch);
    }

    /**
     * Renders stopwatch to DOM.
     */
    drawStopwatch() {
        const stopwatch = document.createElement('div');
        stopwatch.setAttribute('id', this.id);
        stopwatch.setAttribute('class', 'stopwatch');
        document.getElementById('stopwatch-container').appendChild(stopwatch);
    }
}