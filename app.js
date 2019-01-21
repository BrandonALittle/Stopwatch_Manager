
  const stopwatches = [];

  const main = document.getElementById('main');

  const stopwatchContainer = document.createElement('div');
  stopwatchContainer.setAttribute('id', 'stopwatch-container');
  main.appendChild(stopwatchContainer);

  const addStopwatch = document.createElement('button');
  addStopwatch.setAttribute('id', 'addStopwatch');
  addStopwatch.innerText = 'Add Stopwatch';
  addStopwatch.addEventListener('click', () => {
    let stopwatchIndex = stopwatches.length;
    stopwatches.push(new Stopwatch(stopwatchIndex));
  })

  main.appendChild(addStopwatch);
