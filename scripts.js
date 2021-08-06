// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    // Variable Library
    const up = document.getElementById('up');
    const right = document.getElementById('right');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");


    // Functions
    function takeoffButtonClicked() {
        const answer = confirm('Confirm that the shuttle is ready for takeoff.');
        if (answer === true) {
           const flightStatus = document.getElementById("flightStatus");
           flightStatus.innerText = "Shuttle in flight.";
           const shuttleBackground = document.getElementById("shuttleBackground");
           shuttleBackground.style.background = "blue";
           const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
           spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) + 10000;
        }
    }
    function landButtonClicked () {
        alert("The shuttle is landing. Landing gear engaged.");
        const flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "The shuttle has landed.";
        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.background = "green";
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerText = Number(0);
    }
    function move(direction) {
        if (flightStatus.innerHTML === 'Shuttle in flight.') {
            switch (direction) {
                case 'up':
                    if (parseInt(rocket.style.top, 10) >= 10) {
                        rocket.style.top = (parseInt(rocket.style.top, 10) -10).toString(10)+'px';
                        shuttleHeight.innerHTML = (parseInt(shuttleHeight.innerHTML, 10) + 10000);
                        if (parseInt(rocket.style.top, 10) >= 240) {shuttleBackground.style.backgroundColor = 'blue';}
                    }
                    break;
                case 'right':
                    if (parseInt(rocket.style.left, 10) <= 540) {
                        rocket.style.left = (parseInt(rocket.style.left, 10) +10).toString(10)+'px';
                    }
                    break;
                case 'down':
                    if (parseInt(rocket.style.top, 10) <= 240) {
                        rocket.style.top = (parseInt(rocket.style.top, 10) +10).toString(10)+'px';
                        shuttleHeight.innerHTML = (parseInt(shuttleHeight.innerHTML, 10) - 10000);
                        if (parseInt(rocket.style.top, 10) >= 250) {shuttleBackground.style.backgroundColor = 'green';}
                    }
                    break;
                case 'left':
                    if (parseInt(rocket.style.left, 10) >= -10) {
                        rocket.style.left = (parseInt(rocket.style.left, 10) -10).toString(10)+'px';
                    }
                    break;
            }
        }
    }

    // Event Listeners
    takeoffButton.addEventListener('click', takeoffButtonClicked);
    landButton.addEventListener('click', landButtonClicked);
    up.addEventListener('click', () => {move('up')});
    right.addEventListener('click', () => {move('right')});
    down.addEventListener('click', () => {move('down')});
    left.addEventListener('click', () => {move('left')});
}

window.addEventListener('load', init);
