/**
 * Scope and Scope chain
 */

let a = 3;
function x(){
    let b = 5
    console.log({a})
    function y(){ // inner function
        let c = 7
        console.log({b})
        function z(){
            console.log({c})
        }
        z() // when u will call this function console.log(c) will find that c is define in the block of function or not
            // if it is not it will check in it in parent funtion mean one block up
    }
    y() // same will happen for this fun
}
x() 