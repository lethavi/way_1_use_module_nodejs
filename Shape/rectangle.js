/**
 * Created by vietlt 25/11/2019
 */

/**
 * Way 1: Use module in Nodejs
 * Use "exports" keyword to define a module
 * "exports" => can call on other files
 */

 //  "area" is a function
//  exports.area = (width, height) => width * height;

//  "circumference" is a function
// exports.circumference = (width, height) => 2 * (width + height);

/**
 * Way 2: Use module.exports
 * We use this way when we need export a lot of methods
 */

 module.exports = {
   area: (width, height) => width * height,
   circumference: (width, height) => 2 * (width + height)
 }



