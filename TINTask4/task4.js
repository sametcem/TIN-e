//A

console.log("Function calculating the factorial of a number. Do this using recursion and iteration. " +
    "Create recursive function using function expression, iterative function using function declaration");

//recursive
var factorial = function (n) {
    if(n === 0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
};
console.log(factorial(5));

//iteration
function factorial2(number) {
    var fac = 1;
    for(var i=2; i<= number; i++){
        fac = fac * i;
    }
    return fac;
}
console.log(factorial2(5));

// another recursive
var factor = function factorialize(n) { return  n < 2 ? 1 : n * factorialize(n-1);};
console.log(factor(5));

//B

//0,1, 1, 2, 3, 5, 8, 13, 21, 34...
console.log("Function calculating nth number in Fibonacci sequence. ");
function fibNaive(n) {
    if (n<= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}
console.log(fibNaive(7));
console.log(fibNaive(8));

//Seeing fibo series
var fibonacci_series = function (n)
{
    if (n===1) {return [0, 1];}
    else
    {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]); //adding last 2 elements..
        return s;
    }
};

console.log(fibonacci_series(2));

//C)

console.log("Write a JavaScript function that checks whether a passed string is palindrome or not");
function palindrome(str) {
    return str == str.split('').reverse().join('');
}
console.log(palindrome("ey edip adanada pide ye"));
console.log(palindrome("roma"));

//D)

console.log("Write a JavaScript function that returns a passed string with letters in alphabetical order. => Example string : 'webmaster' =>  Expected Output : 'abeemrstw'");
function alphabeticalOrder(str) {
    var x = str.split('');
    return x.sort().join('');
}
console.log("webmaster -> " + alphabeticalOrder("webmaster"));

//E

console.log("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string");

function findLongestWord(str) {
    var longestWord = str.split(' ')
                          .reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    });
    return longestWord;
}

console.log(findLongestWord("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string"));

function findLongestWord2(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
}
console.log(findLongestWord2("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string"));

//basic iter
function findLongestWord3(str) {
    var strSplit = str.split(' ');
    var longestWord = strSplit[0];
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord.length){
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord3("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string"));

//F)
console.log("Write a JavaScript function that accepts a number as a parameter and check the number is prime or not");
function checkPrime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(checkPrime(37));

//G)

console.log("Write a JavaScript function which accepts an argument and returns the type");

function checkDataTypes(value) {
    var dataTypes = [Number, String, Boolean, Object,Function,RegExp], x, len;
    if (typeof value === "Object" || typeof value === "Function") {
        for (x = 0, len = dataTypes.length; x < len; x++) {
            if (value instanceof dataTypes[x]) {
                return dataTypes[x];
            }
        }
    }
    return typeof value;
}
console.log(checkDataTypes(12));
console.log(checkDataTypes(true));
console.log(checkDataTypes("cem"));


//H)

console.log("Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.");

function findSecondGreatestLowest(arr) {
    arr.sort(function (x, y) {
        return x - y;
    });
    var result = [];
    result.push(arr[1], arr[arr.length - 2]);
    return result.join(',');
}

console.log(findSecondGreatestLowest([1, 2, 3, 4, 5]));
console.log(findSecondGreatestLowest([11, 2, 323, 24, 530]));

//I)

//Sample function : amountTocoins(43, [25, 10, 5, 2, 1])
//Here 43 is the amount. and 25, 10, 5, 2, 1 are coins.
//Output : 25, 10, 10, 1

console.log("Write a JavaScript function to convert an amount of money to coins.");
function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            var left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        }
        else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
console.log(amountTocoins(53, [25, 10, 5, 2, 1]));


//J)

console.log("Write a JavaScript program for Binary Search.");
function binary_Search(items, value) {
    items.sort(function (x, y) {
        return x - y;
    });
    var firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
// 1 2 3 4 5 7 8 9 21 42
var items = [1, 2, 3, 4, 5, 7, 8, 9, 42, 21];
console.log(binary_Search(items, 42));
console.log(binary_Search(items, 5));








