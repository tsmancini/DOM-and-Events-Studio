// Write your JavaScript code here.
// Remember to pay attention to page loading!





function init () {
 const takeoffButton = document.getElementById("takeoff");
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

 const landButton = document.getElementById("landing");
 function landButtonClicked() {
     alert("The shuttle is landing. Landing gear engaged.");
     const flightStatus = document.getElementById("flightStatus");
     flightStatus.innerText = "The shuttle has landed.";
     const shuttleBackground = document.getElementById("shuttleBackground");
     shuttleBackground.style.background = "green";
     const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
     spaceShuttleHeight.innerText = Number(0);
 }

 const missionAbortButton = document.getElementById("missionAbort");
 function missionAbortButtonClicked() {
    const answer = confirm("Confirm that you want to abort the mission.")
    if (answer === true) {
        const flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "Mission aborted.";
        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerText = Number(0);
    }
}

 takeoffButton.addEventListener('click', takeoffButtonClicked);
 landButton.addEventListener('click', landButtonClicked);
 missionAbortButton.addEventListener('click', missionAbortButtonClicked);
}

window.addEventListener("load", init);