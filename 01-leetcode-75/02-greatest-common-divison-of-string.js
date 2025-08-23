// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/*

1. Ek Important Condition: Sabse pahle check karo ki str1 aur str2 ko combine karke jo strings banti hai, kya bo barabar hai, Jaise str1 + str2 aur str2 + str1.

    => Agar str1 + str2,  str2 + str1 ke barabar nahin hai to koi bhi common dividing string nahi ho sakti, So, is case mai hum seedha empty string "" return kar sakte hai.
    => Example:
        1. str1 = "LEET"
        2. str2 = "CODE"
        3. str1 + str2 = "LEETCODE"
        4. str2 + str1 = "CODELEET"
        5. ye dono barabar nahin hai, iska matlab koi common divisor nahi hai.
    
    => Is condition ka reason simple hai. Agar str1 aur str2 ka ek common divisor x hai, to str1 1 ko hum x ko m times repeat karke aur str2 ko n times repeat karke bana sakte hai. toh str1 + str2 mai x total (m + n) times repeat hoga, aur str2 + str1 mein bhi.  toh ye dono hamesha barabar honge.

2. Length ka GCD Nikalo: Agar upar wali condition satisfy ho jaati hai, toh hmein pata hai ki ek common divisor hai. Ab hamein sabse bada common divisor dhundna hai. Iske liye, hum dono string ki lengths ka GCD nikalenge.
    => Let's say len1 = str1.length aur len2 = str2.length.
    => GCD(a, b) nikalne ke liye hum Euclidean Algorithm ka use kar sakte hai.
        - Euclidean Algorithm:
            function gcd(a, b) {
                if(b === 0) {
                    return a;
                }
                return gcd(b, a % b)
            }

        ye fn gcd(len1, len2) humein woh length dega jiska common divisor sabse bada hoga.

3. Substring Nikalo: Ab jo length (let's say gcdLength) hmein mil gai, hum str1 ki suruat se us length ki substring lenge.
    => result = str1.substring(0, gcdLength)
    => Yahi string hmara potential answer hai.

4. Final Answer: result string ko return kar do. Upar wale str1 + str2 === str2 + str1 check se hum already guarantee kar chuke hai ki string str1 aur str2 dono ko divide karegi.
*/

const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const len1 = str1.length;
  const len2 = str2.length;
  const gcdLength = gcd(len1, len2);

  return str1.substring(0, gcdLength);
};
