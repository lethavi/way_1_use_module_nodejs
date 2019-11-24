/** 
 *  Created by vietlt 25/11/2019
 * vietleuit@gmail.com - Le Thanh Viet
 */

 const rect = require('./Shape/rectangle');

 const circ = require('./Shape/circle');

 console.log(`The area of the rectangle(width = 10, height = 20) is ${rect.area(10, 20)}`);

 console.log(`The circumference of the rectangle(width = 10, height = 20) is ${rect.circumference(10, 20)}`);

 console.log(`The area of the circle(radius = 10) is ${circ.area(10)}`);
 
console.log(`Now is: ${rect.currentDateTime}`);

 
 

