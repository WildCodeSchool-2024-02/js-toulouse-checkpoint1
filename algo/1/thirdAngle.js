/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  let angle = 180;
  let addition = a + b;
  let result = Math.abs(angle - addition);
  if (addition <= 0 || addition > 180) {
    console.error("The sum of a + b should be between 0 and 180");
  } else {
    return result;
  }
}

console.log(thirdAngle(20, 80));

module.exports = thirdAngle;
