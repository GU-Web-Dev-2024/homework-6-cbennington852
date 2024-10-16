$( document ).ready(function()  {
    var seconds = "00";
    var tens = "00";
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset")
    var interval;
    var pulse = false;
    const defaultStopColor = "grey";

    applyStyling();

    $buttonStart.on("click", function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        pulse = true;
        $('.timer-background').stop(true, false);

        //style the stopwatch green
        $(".timer-background").css({
            'background-color': 'rgb(51,165, 50)'
        });
    });

    $buttonStop.on("click", function () {
        pulse = false;
        clearInterval(interval);
        $(".timer-background").css({
            'background-color': 'red'
        });
    });

    $buttonReset.on("click", function () {
        clearInterval(interval);
        pulse = false;
        $('.timer-background').stop(true, false);
        tens = "00";
        seconds = "00";
        $appendTens.text(tens);
        $appendSeconds.text(seconds);
        $(".timer-background").css({
            'background-color': defaultStopColor
        });
    });

    function applyStyling() {
        //get pragpragh add id named timer
        $('p').attr('id', 'timer');
        //apply class and styling to timer
        $('#timer').attr('class', 'timer-background').css({
            'border-radius': '15px',
            'width': '200px',
            'height': '20px',
            'background-color': defaultStopColor,
            'margin': 'auto',
            'margin-bottom': '20px'

        });
        //apply styling to buttons
        $('button').css({
            'background-color' :  'grey',
            'box-shadow': '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
            'border-radius': '15px',
            'color':'white',
        }).addClass("button-styles");

        $('.wrapper').css({
            'text-align': 'center',
            'align-items': 'center',
            'font-family': 'Verdana',
            'background-color': 'orange',
            'padding': '20px',
            'border-radius': '10px',
            'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
            'width': '300px'
        });
    }

    function pulseAnimation (tens) {
        console.log(pulse)
        if (pulse === false)
        {
            $('.timer-background').stop(true, false);
        }
        else if (tens % 2) { //checks to see if odd
            $('.timer-background').animate({
                opacity: 0.8,
            });
        }
        else {
            $('.timer-background').animate({
                opacity: 1,
            });
        }
    }

    function startTimer() {
        tens++;
        //call pulse animation
        pulseAnimation(tens);

        if (tens < 9) {
            $appendTens.text("0" + tens);
        }

        if (tens > 9) {
            $appendTens.text(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.text("0" + seconds);
            tens = 0;
            $appendTens.text("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.text(seconds);
        }
    }
});