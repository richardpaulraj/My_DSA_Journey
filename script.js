//Example Problem -- Sum of n Natural Numbers

/* // Type 1
function sumOfNaturalNum1(num){
    let ans = 0 //This happen constant amount of time
    for(let i = 1; i <= num; i++){ 
        //initialization of i happen constant amount of time , the condition check and i++ is linear amount of time

        ans += i //linear amount of time
    }
    return ans // constant amount of time 
}
console.log(sumOfNaturalNum1(5))
//Time taken : C2n + C3 => here 3 constant and 2 linear - work not like this(C2 and C3 are just there to distinguish)
//Order of growth : n -> Linear

//


// Type 2 (Best)
Formula => [n(n+1)]/2

function sumOfNaturalNum2(num){
    return (num * (num+1)) / 2
}
console.log(sumOfNaturalNum2(5))
//Time taken : C1 => because its an Arithmetic operation its doing the work in constant amount of time  how much ever big the number may be
//Order of growth : n -> Constant


// Type 3 (Worst)

function sumOfNaturalNum3(num){
let sum = 0
for(let i = 1; i <= num; i++){
    for(let j = 1; j <= i; j++){ //Linear 
        sum++ /Linear
    }
}
return sum //Constant
}
console.log(sumOfNaturalNum3(5))
//Time taken : C4nsqr + C5n + C6 ==> here 2 loops are running so n sqr and there are linear amout of work so C5n and constant work for C6(c4, c5, c6 are just numbers to distinguish)
//Order of growth : n sqr -> Quadratic

*/


/*Asymptotic Analysis

 ==>The main idea is to measure the order of the growth and it does not depends upon language, machines, etc
 ==> Here we do worst case analysis most of the time
 ==> Here we evaluate the performance of an algorithm in terms of input size

 ==>Here we first need to find the time taken and then order of the growth

    Order of the growth of the function is the leading term 
    To find the order of the growth ignore then lower order terms and ignore the constant of the higher order term what remains is order of the growth

*/

/* Order of the growth Table:

 O(1)     	constant
 O(logb n)	logarithmic (for any b)
 O(n)	        linear
 O(n logb n)	“en log en” or nLogn
 O(n^2)	    quadratic
 O(n^3)	    cubic
 O(c^n)	    exponential (for any c)

*/

/* Order of the growth similar one

 C  <  log log n  <  log n  <  n ^ 1/3  <  n ^ 1/2  <  n  <  n^2  <  n^3  <  n^4  <  2^n  <  n^n

*/

/* Example:1
 f(n) = C1logn + C2  vs  g(n) = C3n + C4loglogn + C5   ===> f(n) = logn < g(n) = n --> so f(n) is the best solution

 Example:2
 f(n) = C1n^2 + C2n + C3  VS g(n) = C4nlogn + C5n + C6   ===> f(n) = n^2  >  g(n) = nlogn --> so g(n) is the best solution

*/




/* Asymptotic Notations

1) Big O : Exact or Upper Bound
2) Theta : Exact
3) Omega : Exact or Lower Bound

//We dont use Omega Notation much

*/

/* Big 0 Notation:-

eg.1  3n^2 + 5n + 6  
==>  O(n^2)

eg.2  3n + 10nlogn + 3
==>  O(nlogn)  -> see the Order of the growth Table nlogn is bigger than n

eg.3  10n^3 + 40n + 10
==>  O(n^3) 

//Big O Notation works for multiple variables also (Carefull)

eg.1   100n^2 + 1000m + n
==>   O(n^2 + m)

eg.2   1000m^2 + 200mn + 30m + 20n
==>   O(m^2 + mn)


//If you have a complex logic in a problem with many cases and you wanted to check the order of the growth => At that situation you find out the worst case(upper bound) and use Big O notation and say that is the time complexity and Big O notation covers everything if you put worst case value in the problem 

*/

/* Omega Notation

    eg.  5n^2 + 4n +6
    ==> here you can write  Omega(n) also because we are considering Exact or Lower Bound
        similarly you can also write this as Big O(n^3) because we can even write upper bound there but if we know the value we should be precise 


    Simple FACT - Any Algorithm can be written as Omega(1) ==> because there are only two possibilities either constant time taken or higher than constant time taken
*/


/* Theta Notation


*/