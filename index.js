const multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};

//2

Issac Bien-Aime
  11:02
Okay idk if anyone else used this but I used NaN to check if something was a number or not. It works with decimals as well
const greaterNum = (n1, n2) => {
  if (isNaN(n1) || isNaN(n2)) {
    return `null`
  } else if (n1 === n2) {
    return "both integers are equal"
  } else if (n1 > n2) {
    return n1
  } else {
    return n2
  }
};
