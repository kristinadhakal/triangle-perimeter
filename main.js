// Triangle Perimeter Assignment Start Code

// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Inputs (xA, yA) (xB, yB) (xC, yC)
  let xA = +document.getElementById("x1").value;
  let yA = +document.getElementById("y1").value;
  let xB = +document.getElementById("x2").value;
  let yB = +document.getElementById("y2").value;
  let xC = +document.getElementById("x3").value;
  let yC = +document.getElementById("y3").value;

  // Process
  let ABdist = calcDist(xA, xB, yA, yB);
  let ACdist = calcDist(xA, xC, yA, yC);
  let BCdist = calcDist(xB, xC, yB, yC);

  let peri = ABdist + ACdist + BCdist;

  // calc output - distacne
  document.getElementById("AB-distace").innerHTML = ABdist;
  document.getElementById("AC-distace").innerHTML = ACdist;
  document.getElementById("BC-distace").innerHTML = BCdist;

  // calc output - distacne
  document.getElementById("ABC-perimeter").innerHTML = peri;
}

function calcDist(pointX1, pointX2, pointY1, pointY2) {
  let dist = Math.sqrt((pointX2 - pointX1) ** 2 + (pointY2 - pointY1) ** 2);
  return dist;
}
