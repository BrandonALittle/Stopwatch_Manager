class Controls {
    constructor(owner) {
        this.owner = owner;
        // Render controls to DOM.
        this.drawControls();
    }

    /**
     * Renders controls to DOM; adds event listeners and calls Stopwatch methods accordingly.
     */
    drawControls() {
        const controls = document.createElement('div');
        const startStopButton = document.createElement('button');
        const resetButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        controls.setAttribute('class', 'controls');
        deleteButton.setAttribute('class', 'delete');

        startStopButton.innerText = 'Start/Stop';
        resetButton.innerText = 'Reset';
        deleteButton.innerText = 'X';

        startStopButton.addEventListener('click', () => {
            this.owner.startStop();
        });

        resetButton.addEventListener('click', () => {
            this.owner.reset();
        });

        deleteButton.addEventListener('click', () => {
            this.owner.terminate();
        });

        controls.appendChild(startStopButton);
        controls.appendChild(resetButton);
        controls.appendChild(deleteButton);

        const stopwatch = document.getElementById(this.owner.id);
        stopwatch.appendChild(controls);
    }
}