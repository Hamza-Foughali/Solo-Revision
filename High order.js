function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}

function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}
//////////////////////////////////////////////
/////////////////////////////////////////////
// EX.1
function addOne(array){
    
    return map(array,function(element){
        return element + 1
    })

}
//////////////////////////////////////////////
// EX.2
function removeEveryOther(arr) {
    return filter(arr,function(i){
        return i % 2 === 0
    })
  }
/////////////////////////////////////////////
//EX.3
function doubleAll(nums) {
  return map(nums,function(ele){
    return ele * 2
  })
  
}

function squareAll(nums){
    return map(nums,function(ele){
        return ele * ele
    })
}

function stringLengths(array){
    return map(array,function(str){
        return str.length
    })
}
///////////////////////////////////////////////
//EX.4
function odds(nums) {
    return filter(nums, function(num) {
      return num % 2 !== 0;
    });
  }
  

  function positives(nums) {
    return filter(nums, function(num) {
      return num > 0;
    });
  }
  
  function negatives(nums) {
    return filter(nums, function(num) {
      return num < 0;
    });
  }
  
  function evenLength(nums) {
    return filter(nums, function(arr) {
      return arr.length % 2 === 0;
    });
  }
  
  function largerThanSix(nums) {
    return filter(nums, function(num) {
      return num > 6;
    });
  }
///////////////////////////////////////////
//EX.5
function sum(nums) {
    return reduce(nums, function(acc, num) {
      return acc + num;
    }, 0);
  }
  
  function product(nums) {
    return reduce(nums, function(acc, num) {
      return acc * num;
    }, 1);
  }
  
  function allOdds(nums) {
    return reduce(nums, function(acc, num) {
      return acc && !(num % 2 === 0);
    }, true);
  }
  
  function squareSum(nums) {
    return reduce(nums, function(acc, num) {
      return acc + num * num;
    }, 0);
  }
  ////////////////////////////////////////////
  //EX.6
  function map2(arr1, arr2, func) {
    return map(arr1, function (num, i) {
      return func(num, arr2[i]);
    });
  }
//////////////////////////////////////////////
//EX.7
// we have an array of students : 
var students = [ 
	{ name: "Alice", grade: 90, teacherNotes: "Excellent work", level: "A" }, 
	{ name: "Bob", grade: 80, teacherNotes: "Good effort", level: "B" }, 
	{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" }, 
	{ name: "Dave", grade: 75, teacherNotes: "Needs improvement", level: "C" }
]

function gradeHigherThan90(array){
    return filter(array,function(ele){
        return ele.grade >= 90;
    });
}

function allStudentNames(array){
    return map(array,function(ele){
        return ele.name;
    })
}

function averageGrade(array){
   var sumALL = reduce(array,function(total,ele){
     total + ele.grade
    },0)
    return sumALL / array.length

}

function levelAplus(array){
    return filter(array,function(ele){
        return ele.level === "A+";
    })
}

function allStudentGrades(array) {
    return map(array, function(ele) {
        return ele.grade;
    })
}

/// still have to work


///////////////////////////////////////////

//EX.8

function productList(array) {
    return map(array, function(product) {
        return product.productName;
    });
}

function electronicProducts(array) {
    var electronics = filter(array, function(product) {
        return product.productCategory === "Electronics";
    });
    return map(electronics, function(product) {
        return product.productName;
    });
}

function totalToPay(array) {
    return reduce(array, function(total, product) {
        return total + (product.productPrice * product.productQuantity);
    }, 0);
}

function productYouCanbuy(amount, array) {
    return filter(array, function(product) {
        return product.productPrice >= amount;
    });
}

function productsQuantity(array) {
    return reduce(array, function(acc, product) {
        if (acc[product.productCategory]) {
            acc[product.productCategory] += product.productQuantity;
        } else {
            acc[product.productCategory] = product.productQuantity;
        }
        return acc;
    }, {});
}

function totalPriceByCategory(category, array) {
    var result = reduce(array, function(acc, product) {
        if (product.productCategory === category) {
            acc.totalQuantity += product.productQuantity;
            acc.totalCost += product.productPrice * product.productQuantity;
        }
        return acc;
    }, { totalQuantity: 0, totalCost: 0 });

    return result;
}