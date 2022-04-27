// Problem #2

/*
let newArr = [1, -3, 12, -1, 3, -4, -2, 1, -7];
let n = true;
if(newArr[0] < 0){
  for(let i = 0; i < newArr.length; i++){
    if(i % 2 == 0 && newArr[i] > 0){
      n = i;
      break
    } else if(i % 2 != 0 && newArr[i] < 0){
      n = i;
      break;
    }
  }
} else{
  for(let i = 0; i < newArr.length; i++){
    if(i % 2 == 0 && newArr[i] < 0){
      n = i;
      break
    } else if(i % 2 != 0 && newArr[i] > 0){
      n = i;
      break;
    }
  }
}
console.log(n);
*/

// Problem #3

/*
const obj = {
  arr: [15, 20, 12, 4, -13, 5],
  at: function(index){
    if(index >= 0){
      let a = 0;
      let b = false;
      for(let i = 0; i < this.arr.length; i++){
        if(index == i){
          a = this.arr[i];
          b = true;
          break;
        }
      }
      if(b == true){
        return a;
      } else{
        return undefined;
      }
    } else{
      let d = Math.abs(index);
      d = this.arr.length - d;
      let a = 0;
      let b = false;
      for(let i = this.arr.length; i > 0; i--){
        if(d == i){
          a = this.arr[i];
          b = true;
          break;
        }
      }
      if(b == true){
        return a;
      } else{
        return undefined;
      }
    }
  }
}

console.log(obj.at(3));
*/

// Problem #1

/*
let x = "314";
let y = 8;

function sixteen(x) {
  switch (x) {
    case "A": 
      return 10;
    case "B": 
      return 11;
    case "C": 
      return 12;
    case "D": 
      return 13;
    case "E": 
      return 14;
    case "F": 
      return 15;
    default : 
      return x;
   }
};

function calculate(x, y) {
  let sum = 0;
  for(let j = x.length - 1; j >= 0; j--) {
      sum += sixteen(x[j]) * y ** (x.length - j - 1);
  }
  return sum; 
}

console.log(calculate(x, y));
*/

// Problem #8

/*
const matrix = [
  [1, 1, 1, 1, 1],
  [3, 100, 100, 100, 100],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1]
];

const getMinimalCell = function (table, i, j) {
  const top = table[i - 1]?.[j];
  const left = table[i][j - 1];
  let sum = 0;

  if (top !== undefined && left !== undefined) {
    sum += top > left ? left : top;
  }
  if (top !== undefined && left === undefined) {
    sum = table[i - 1][j];
  }

  if (top === undefined && left !== undefined) {
    sum = table[i][j - 1];
  }
  return sum;
};

const getMinRoute = function (matrix, i, j, res = []) {
  res[res.length] = [i, j];
  const left = matrix[i][j - 1];
  const top = matrix[i - 1]?.[j];

  if (top !== undefined && left !== undefined) {
    if (left > top) {
      getMinRoute(matrix, i - 1, j, res);
    } else getMinRoute(matrix, i, j - 1, res);
  }

  if (top !== undefined && left === undefined) {
    getMinRoute(matrix, i - 1, j, res);
  }

  if (top === undefined && left !== undefined) {
    getMinRoute(matrix, i, j - 1, res);
  }
  return res;
};

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] += getMinimalCell(matrix, i, j);
  }
}

const res = getMinRoute(matrix, matrix.length - 1, matrix[0].length - 1);
console.log(res.reverse());
*/

// Problem #4

/*
const string = {
  reverse: function(str) {
    let sum = "";
    for (let k = str.length - 1; k >= 0; k--) {
      sum += str[k];
    }
    return sum;
  },
  indexOf(chr, str){
    str = str.split("");
    let a = 0;
    let check = false;
    for(let i = 0; i < str.length; i++){
      if(chr == str[i]){
        a = i;
        check = true;
        break;
      }
    }
    if(check == true){
      return a;
    } else {
      return -1;
    }
  },
  lastIndexOf(chr, str){
    str = str.split("");
    let a = 0;
    let check = false;
    for(let i = str.length - 1; i > 0; i--){
      if(chr == str[i]){
        a = i;
        check = true;
        break;
      }
    }
    if(check == true){
      return a;
    } else {
      return -1;
    }
  },
  slice(start, end, str){
    let a = [];

    if(start < 0 || start > end - 1){
      return -1;
    } else if(end < start && end > str.length - 1){
      return -1;
    }

    for(let i = start; i <= end; i++){
      a.push(str[i]);
    }
    return(a.join(""));
  },
  trim(str){
    str = str.split("");
    let b = [];
    let f = 0;
    let u = 0;
    for(let i = 0; i < str.length - 1; i++){
      if(str[i] != " "){
        f = i;
        break;
      }
    }
    for(let i = str.length - 1; i > 0; i--){
      if(str[i] != " "){
        u = i;
        break;
      }
    }
    for(let i = f; i < u; i++){
      b.push(str[i]);
    }
    return b.join("");
  }
}


console.log(string.trim("   salo     am   "));
*/

// Problem #7

/*
let a = [1, 5, 12, 5, -10];
let c = [12, 6, 1];

let x = [];

a.forEach((item) => {
  if(a != "") x.push(a[0]);
  a = a.filter((el) => {
    return a[0] != el;
  })
})

let y = [];

c.forEach((item) => {
  if(c != "") y.push(c[0]);
  c = c.filter((el) => {
    return c[0] != el;
  })
})

let d = [...x, ...y];
console.log(d);
*/

// Problem #5

/*
let z = { x: 1, y: 2 };

function objectIt(obj) {
  let massive = [];
  for (let i in obj) {
    let a = [i, obj[i]];
    massive.push(a);
  }

  console.log(massive);
}
objectIt(z);
*/





