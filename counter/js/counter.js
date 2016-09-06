//Javascript for counter.php
//This allows the user to pick a positive number and the countUp() function will count to that number on the document.
//Cameron Kunz 9/5/2016
"use strict";
//setting the counter to 0
var i = 0;

//getting the button id
var submitButton = document.getElementById("submitButton");

//start of the countUp() function
function countUp() {

    //gets the user value from the element input "userValue"
    var userNumber = document.getElementById("userValue");

    //parses the userNumber into a int. the 10 is the radix, 10 being the most common way to display these numbers
    var amount = parseInt(userNumber.value, 10);

    //timeout function to keep the counter on the document for 1 second
    setTimeout(function () {
        //if statement to check if value is not a number, if so, sends a alert to the user and reloads the page
        if (isNaN(amount)) {
            window.location.reload();
            alert("Please pick a number");
        //if statement to check if value is less than or = to 0, if so, send a alert to the user and reloads the page
        } else if (amount <= 0) {
            window.location.reload();
            alert("Please pick a number greater than 0");
        //else add one to the counter and display the counter
        } else {
            i++;
            document.getElementById("divCount").innerHTML = i;

            //if statment to check if the counter is less than the user amount, if so, we jump back into the countUp() function again
            if (i < amount) {
                countUp();
            //if statment to check if the counter is greater than or = to the user amount, if so, we reload the page after 1 second.
            } else if (i >= amount) {
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            //else if anything else happends, a "Failed" message is diplayed.  This should not be displayed if everything above is working.
            } else {
                document.body.innerHTML = "Failed";
            }
        }
    }, 1000);
}

//calling the countUp() function when the submitButton is pressed
submitButton.onclick = function() {
    countUp();

};
