function randomNumber() {
  const randomNum = Math.round(Math.random() * 5) + 1;

  return randomNum;
}

function isEven(number) {
  let result = "";

  if (parseInt(number) % 2 == 0) {
    result = "pari";
  } else {
    result = "dispari";
  }

  return result;
}
