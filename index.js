// function receivesAFunction(){
// }
// receivesAFunction (function(){
//     return Spy


const receivesAFunction = spy => {
    return console.log(spy( `receives a function and calls it`))
}
// let returnsANamedFunction = fn => {
//     return console.log(fn())
// }
function returnsANamedFunction(){
    // function beforeall(){}
    // we are passing this return function inside it 
    return function beforeall(){
    }
}
// receivesAFunction()
// var fn = returnsANamedFunction
// const returnsANamedFunction = () => {
//     // return console.log('hafsa')
// }
// const returnsAnAnonymousFunction = function() {
// }
function returnsAnAnonymousFunction(){
    // we are returning an anonymous function
    return function(){
    }
}