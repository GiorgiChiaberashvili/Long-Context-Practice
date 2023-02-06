function allTheArgs(func, ...args) {
  // Your code here
  return function (...allTheArgs) {
    return func(...args, ...allTheArgs)
  }
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
