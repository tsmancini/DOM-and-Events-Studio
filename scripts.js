// Write your JavaScript code here.
// Remember to pay attention to page loading!





function init () {
 const takeoffButtonClicked = document.getElementById("takeoff");
 function takeoffButtonClickedfunction() {
     const answer = confirm('Confirm that the shuttle is ready for takeoff.');
     if (answer === true) {
        const flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "Shuttle in flight.";
        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.background = "blue";
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) + 10000;
     }
    const landButtonClicked = document.getElementById("landing");
    function landButtonClicked () {
        alert("The shuttle is landing. Landing gear engaged.");

    }
    


 }

 takeoffButtonClicked.addEventListener('click', takeoffButtonClickedfunction);
 landButtonClicked.addEventListener('click', landButtonClicked);


}

window.addEventListener("load", init);