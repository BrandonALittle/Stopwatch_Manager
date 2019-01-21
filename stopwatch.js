
class Stopwatch {
    constructor(index) {
        this.id = `stopwatch-${index}`;
        this.isRunning = false; 
        this.elapsedTime = 0; 
        this.previousTime = Date.now();
        this.drawStopwatch();
        this.display = new Display(this);
        this.controls = new Controls(this);
        this.intervalID = setInterval(() => {this.tick()}, 100);
    }

    tick() {
        if (this.isRunning) {
            const now = Date.now();
            this.elapsedTime = this.elapsedTime + (now - this.previousTime);
            this.previousTime = now;  
        }
        this.display.updateTime(this.elapsedTime);
        this.display.updateDisplay();
    }

    startStop() {
        if (!this.isRunning) {
            this.previousTime = Date.now();
        }
        this.isRunning = !this.isRunning;
    }

    reset() {
        this.elapsedTime = 0;
    }

    terminate() {
        clearInterval(this.intervalID);
        const stopwatchContainer = document.getElementById('stopwatch-container');
        const stopwatch = document.getElementById(this.id);
        stopwatchContainer.removeChild(stopwatch);
    }

    drawStopwatch() {
        const stopwatch = document.createElement('div');
        stopwatch.setAttribute('id', this.id);
        stopwatch.setAttribute('class', 'stopwatch');
        document.getElementById('stopwatch-container').appendChild(stopwatch);
    }
}