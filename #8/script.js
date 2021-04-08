//var hours = document.getElementsByClassName("test");

function startClock() {
    var hours = document.getElementById("hours");
    var hoursValue = Number(hours.innerHTML);

    var minutes = document.getElementById("minutes");
    var minutesValue = Number(minutes.innerHTML);

    var seconds = document.getElementById("seconds");
    var secondsValue = Number(seconds.innerHTML);

    console.log(hoursValue + ":" + minutesValue + ":" + secondsValue);

    setInterval(function () {
        secondsValue++;

        if(secondsValue < 10){
            seconds.innerHTML = "0" + secondsValue;
        } else{
            seconds.innerHTML = secondsValue;
        }

        if(secondsValue == 60){
            minutesValue++;
            secondsValue = 0;

            if(minutesValue < 10){
                minutes.innerHTML = "0" + minutesValue;
            } else {
                minutes.innerHTML = minutesValue;
            }
        }

        if(minutesValue == 60){
            hoursValue++;
            minutesValue = 0;

            if(hoursValue < 10){
                hours.innerHTML = "0" + hoursValue;
            } else {
                hours.innerHTML = hoursValue;
            }
        }

        if(hoursValue == 24){
            secondsValue = 0;
            minutesValue = 0;
            hoursValue = 0;

            seconds.innerHTML = "00";
            minutes.innerHTML = "00";
            hours.innerHTML = "00";
        }
    }, 1);    

}



