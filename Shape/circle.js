/**
 * Created by vietlt 25/11/2019
 */
/**

/**
 * Way 2: Use module.exports
 * We use this way when we need export a lot of methods
 */

 const {PI} = Math
module.exports = {
  area: (radius) => PI * radius * radius,
 //  Public a property, not a function
 currentDateTime: Date()
}