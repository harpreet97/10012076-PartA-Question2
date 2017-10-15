
var userOption = document.querySelector("#userOption");

var seats = [false, false, false, false, false, false, false, false, false, false];
var seatNumber = 0;

function CheckUserOption() {
    if (parseInt(userOption.value) == 1) {
        //first class
        BookSeat(0, 4);
    }
    else if (parseInt(userOption.value) == 2) {
        //economy class
        BookSeat(5, 9);
    }
    else {
        alert("Please select either First Class (enter-1) or Economy Class (enter-2) ");
    }
}

function BookSeat(startSeat, endSeat) {
    seatNumber = 0;
    for (var i = startSeat; i <= endSeat; i++) {
        debugger;
        if (seats[i] == false) {
            seats[i] = true;
            seatNumber = i + 1;
            break;
        }
    }
    if (seatNumber > 0) {
        alert("We have booked seat " + seatNumber + " for you.");
    }
    else {
        alert("All seats are booked in this category.");
    }
    var wantToContinue = confirm("Want to book another seat ?");
    if (wantToContinue == true) {
        var selectUserOption = prompt("In which class you want seat First Class (enter-1) or Economy Class (enter-2)");
        if (selectUserOption == "1") {
            //first class
            BookSeat(0, 4);
        }
        else if (selectUserOption == "2") {
            //economy class
            BookSeat(5, 9);
        }
        else {
            alert("Please select either First Class (enter-1) or Economy Class (enter-2) ");
        }
    }
    else {
        alert("Flight leaves in 3 hours.");
    }
}

function Submit() {
    CheckUserOption();
}
