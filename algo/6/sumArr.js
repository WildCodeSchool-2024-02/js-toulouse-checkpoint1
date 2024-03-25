/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA, arrayB) {
  const maxLength = Math.max(arrayA.length, arrayB.length);

  let result = [];

  for (let i = 0; i < maxLength; i++) {
    /**
|--------------------------------------------------
| logique complète décortiquée!A la Marseillaise...SAAAAAAAL!!
|--------------------------------------------------
*/

    // const numA = Number(arrayA[i]);
    // const numB = Number(arrayB[i]);

    // if (numA && numB) {
    //   result.push((numA + numB).toString());
    // } else if (numA && !numB) {
    //   result.push(numA.toString());
    // } else if (!numA && numB) {
    //   result.push(numB.toString());
    // }

    /**
|--------------------------------------------------
| logique factorisée avec ternaires...Peut mieux faire.T'es encore un noob!
|--------------------------------------------------
*/

    // result.push(
    //   (
    //     (arrayA[i] ? Number(arrayA[i]) : 0) +
    //     (arrayB[i] ? Number(arrayB[i]) : 0)
    //   ).toString()
    // );

    /**
|--------------------------------------------------
| logique factorisée pour les boss
|--------------------------------------------------
*/

    result.push(
      ((Number(arrayA[i]) || 0) + (Number(arrayB[i]) || 0)).toString()
    );
  }

  console.log(result);

  return result;
}

module.exports = sumArr;

