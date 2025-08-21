// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//1.  toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//2.  notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

const expect = function (val) {
  return {
    toBe: function (expectedVal) {
      if (val === expectedVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (unexpectedVal) {
      if (val !== unexpectedVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

// not equal case
try {
  console.log(expect(5).toBe(6));
} catch (e) {
  console.log(`Error : ${e.message}`);
}

// equal case
try {
  console.log(expect(5).toBe(5));
} catch (e) {
  console.log(`Error : ${e.message}`);
}

// notToBe
try {
  console.log(expect(5).notToBe(6));
} catch (e) {
  console.log(`Error : ${e.message}`);
}
// notToBe
try {
  console.log(expect(5).notToBe(5));
} catch (e) {
  console.log(`Error : ${e.message}`);
}

/*
1. Jab aap expect() ko kisi val ke sath run karte hai to technically run hote hi yh fn ek object return kare aur val variable ki value memory se delete ho jaani chahiye.

2. Even though expect fn has finished its work and closed, that object still remember that variable jo expect fn ko pass kiya tha: Isi remembring capacity ko closure kahte hai.

-----------------------------

=> expect(5) ko call kiya.
=> val ki value 5 set ho gayi.
=> expect fn ne ek object return kar diya aur apna kaam khatam kar diya. Technically, val variable ko memory se delete ho jaana chahiye.
=> But... jab aap call karte ho expect(5).toBe(6), toh woh .toBe() fn ko abhi bhi val ki value 5 ka pata hai. Woh val ko "close over" kar leta hai.

===> Closure is jab ek inner fn apna outer fn ke variables ko access kar paata hai, even after the outer function has finished executing.

*/
