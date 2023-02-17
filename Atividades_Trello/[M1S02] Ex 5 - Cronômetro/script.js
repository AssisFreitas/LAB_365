var timer = 0;
    var interval;
    var isRunning = false;

    function startTimer() {
      isRunning = true;
      interval = setInterval(function() {
        timer++;
        document.getElementById("timer").innerHTML = timer;
        if (timer == 10) {
          clearInterval(interval);
          document.getElementById("timer").innerHTML = "Seu tempo acabou!! Tente novamente!! ";
          timer = 0;
          isRunning = false;
        }
      }, 1000);
    }

    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", function() {
      if (isRunning) {
        clearInterval(interval);
        isRunning = false;
      } else {
        startTimer();
      }
    });