// //
// let arr1 = [1, 4, 5, 8]

// Array.prototype.pop_last2_elements = function (){  this.pop()}
// arr1.pop_last2_elements()
// console.log(arr1);


// let arr = [1, 2, 3];
// Array.prototype.popLast2 = function () { this.pop() }
// console.log(arr)
// arr.popLast2()
// console.log(arr);

// // objest first , name it as user, give basic details to user object, using prototype
// fetch for a JOKE API it should be a function name as
// get joke for user.

let user = {
    name: 'Afzal',
    age: 18,
    user_joke:""
    
}

// const joke = fetch('https://api.chucknorris.io/jokes/random') // fetching data from API
//     //  console.log(joke); //display: promise
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
Object.prototype.getjoke = function () {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => this.user_joke = data.value);
}
user.getjoke()
console.log(user);
