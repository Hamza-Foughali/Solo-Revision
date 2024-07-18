// 1

function iterateAndLogWithFor(n) {
  for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

function iterateAndLogWithWhile(n) {
  var i = 0;
  while (i <= n) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
    i++;
  }
}

// 2

function reverseIterateAndLogWithFor(n) {
  for (var i = n; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

function reverseIterateAndLogWithWhile(n) {
  var i = n;
  while (i >= 0) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
    i--;
  }
}

function reverseIterateAndLogRecursively(n) {
  if (n < 0) return;
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
  reverseIterateAndLogRecursively(n - 1);
}

// 3

function weirdDivisionWithFor(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("JuliaJames");
    } else if (i % 3 === 0) {
      console.log("Julia");
    } else if (i % 5 === 0) {
      console.log("James");
    } else {
      console.log(i);
    }
  }
}

function weirdDivisionWithWhile(n) {
  var i = 1;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("JuliaJames");
    } else if (i % 3 === 0) {
      console.log("Julia");
    } else if (i % 5 === 0) {
      console.log("James");
    } else {
      console.log(i);
    }
    i++;
  }
}

function inverseWeirdDivisionRecursively(n) {
  if (n < 1) return;
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("JuliaJames");
  } else if (n % 3 === 0) {
    console.log("Julia");
  } else if (n % 5 === 0) {
    console.log("James");
  } else {
    console.log(n);
  }
  inverseWeirdDivisionRecursively(n - 1);
}

// 4

function laughWithFor(number) {
  var result = "";
  for (var i = 0; i < number; i++) {
    result += "ha";
  }
  console.log(result);
}

function laughWithWhile(number) {
  var result = "";
  var i = 0;
  while (i < number) {
    result += "ha";
    i++;
  }
  console.log(result);
}

function laughRecursively(number) {
  if (number === 0) {
    return "";
  }
  return "ha" + laughRecursively(number - 1);
}

// Extra

function sumWithWhile(number) {
  var sum = 0;
  var i = number;
  while (i > 0) {
    sum += i;
    i--;
  }
  return sum;
}

function sumWithFor(number) {
  var sum = 0;
  for (var i = number; i > 0; i--) {
    sum += i;
  }
  return sum;
}

// 5

function factorialRecursively(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorialRecursively(number - 1);
}

// 6

function rangeFor(min, max) {
  var result = [];
  for (var i = min; i < max; i++) {
    result.push(i);
  }
  return result;
}

function rangeWhile(min, max) {
  var result = [];
  var i = min;
  while (i < max) {
    result.push(i);
    i++;
  }
  return result;
}

// 7

function reverseWithFor(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseWithWhile(str) {
  var reversed = "";
  var i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}

function reverseRecursively(str) {
  if (str === "") {
    return "";
  }
  return str[str.length - 1] + reverseRecursively(str.slice(0, -1));
}

// 8

function addDigits(num) {
  var sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

// 9

function fibRecursive(number) {
  if (number === 0) return 1;
  if (number === 1) return 1;
  return fibRecursive(number - 1) + fibRecursive(number - 2);
}

// 10

function firstDigit(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      return str[i];
    }
  }
  return undefined;
}

// 11

function remove(array, element) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      result.push(array[i]);
    }
  }

  return result;
}

// 12

function average(arrOfNumbers) {
  var sum = 0;

  for (var i = 0; i < arrOfNumbers.length; i++) {
    sum += arrOfNumbers[i];
  }
  return sum / arrOfNumbers.length;
}

// 13
