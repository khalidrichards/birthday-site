function getDaysUntilBirthday() {
    var birthday = new Date("09/11/2023");
    var today = new Date();

    var timeDifference = birthday.getTime() - today.getTime();
    var timeDifferenceInDays = timeDifference / (1000 * 3600 * 24);
    console.log("It is " + timeDifferenceInDays + " days until your birthday.");
    return Math.ceil(timeDifferenceInDays);
}

function updateCountdown() {
    var daysUntilBirthday = getDaysUntilBirthday();
    var countdownMessage = "It is <b>" + daysUntilBirthday + "</b> days until Khalid's birthday!";
    var countdown = document.getElementById('countdown');
    countdown.innerHTML = "<p>" + countdownMessage + "</p>";
}