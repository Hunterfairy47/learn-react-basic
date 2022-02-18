//Arrow Function
const logger = (a, b) => a + b;
console.log(logger);
//=============================
const logger = (log) => console.log(log);
logger("Message....");

//================================
const course = {
  name: "Javascript basis!",
  getName: function () {
    return this.getName; //Context
  },
};

console.log(course.getName());
