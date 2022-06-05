if (performance.getEntriesByType("navigation")[0].type === "reload") {
  var randomNum1 = Math.floor(Math.random() * 6) + 1;
  var randomNum2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");

  if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
    document.querySelector(".p1").textContent = "🚩Player 1🚩";
    document.querySelector(".p2").textContent = "Player 2";
  } else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
    document.querySelector(".p1").textContent = "Player 1";
    document.querySelector(".p2").textContent = "🚩Player 2🚩";
  } else {
    document.querySelector("h1").textContent = "It's a Draw!!!";
    document.querySelector(".p1").textContent = "Player 1";
    document.querySelector(".p2").textContent = "Player 2";
  }
}
