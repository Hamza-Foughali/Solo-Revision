//.1
function addFullNameProperty(object) {
  if (object.firstName && object.lastName) {
    object.fullName = object.firstName + " " + object.lastName;
  }
}

//.2

function addArrayProperty(object, key, array) {
  object[key] = array;
}

//.3

drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}

//.4

function signAll(obj, name) {
  var res = [obj];

  while (res.length > 0) {
    var currentObj = res.shift();

    for (var key in currentObj) {
      if (typeof currentObj[key] === "object") {
        res.push(currentObj[key]);
      } else if (key === "signature") {
        currentObj[key] = name;
      }
    }
  }

  return obj;
}
