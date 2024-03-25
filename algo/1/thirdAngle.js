/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  // Your code here !
  let c;
  c =
    a + b >= 180
      ? "le troisieme angle d'un triangle ne peut pas être égale ou inférieur à 0"
      : 180 - (a + b);
  return c;
}

console.log(thirdAngle(100, 79));
console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));

module.exports = thirdAngle;
