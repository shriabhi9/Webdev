/**
 * A closure is the combination of function bundled 
 * together with references to its lexical environment
 * 
 * In other words, a closure is a function that remebers
 * its outer variables and can access them
 */

function x() {
    let a = 10;

    function y() {
        let b = 20;
        console.log(a);

        function z() {
            console.log(b);
        }
        z();
    }
    y();
}
x();
// Here if you see function z() does not have variable b in its scope so it looks 
// up in the hierarchy for the value of b and since it has reference to its outer 
// lexical environment it is able to print the value of b .hence this function forms 
// a closure with its outer environment and can access the variable of its outer environment as well.