

module.exports = function (){
  return {
    add: function(num1, num2) { 
         console.log("the sum is:", num1 + num2);
    },
    multiply: function(num1, num2) {
        console.log("the total is:", num1 * num2);
    },
    square: function(num) {
       console.log("the square is:", Math.pow(num,2));

    },
    random: function(num1, num2) {
       console.log("the square is:", Math.random(num1,num2));
    }
  }

};


// module.exports = function(){
//    return {
//         greet: function(){
//            console.log("we are now using a module!");
//        },
//        add: function(num1, num2){
//             console.log("the sum is:", num1 + num2);
//        }
//     }
// }

// module.exports = {
//    greet: function(){
//        console.log("we are now using a module!");
//    },
//    add: function(num1, num2){
//        console.log("the sum is:", num1 + num2);
//    }
// }
