      var answer = "1013";

      function setAnswer() {
        answer = "";

        for (var i = 0; i < 4; i++) {
          answer += Math.floor(Math.random() * 6);
        }
      }

      function showAnswer() {
        document.getElementById("my-div1").innerHTML = answer + "<br>";
      }

      function hideAnswer() {
        document.getElementById("my-div1").innerHTML = "";
      }

      function addCode() {
        var guess = document.getElementById("xx").value;

        document.getElementById("my-div").innerHTML +=
          guess + " " + rate(guess,answer) + "<br>";
      }

      function clearAll() {
        document.getElementById("my-div").innerHTML = "";
      }

      function rate(guess, answer) {
        var red = 0;
        var white = 0;
        var i = 0;

        // Get red
        while (i < guess.length) {
          if (guess[i] == answer[i]) {
            red = red + 1;
            guess = guess.replace(guess[i], "")
            answer = answer.replace(answer[i], "")
          } else {
            i = i + 1;
          }
        }

        // Get white
        for (i = 0; i < guess.length; i++) {
          if (answer.indexOf(guess[i]) != -1) {
            white = white + 1;
            answer = answer.replace(guess[i], "")
          }
        }
        return "" + red + white;
      }

