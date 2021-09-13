// this code taken from coding along with 32.1.14
// copyright Colt Steele and/or Rithm School and/or Springboard

class ExpressError extends Error {
  constructor(msg, status) {
    super();
    this.msg = msg;
    this.status = status;
    console.error(this.stack)
  };
};

module.exports = ExpressError;