const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); // pass these into the shape class 
    this.officeNumber = officeNumber;
  }
  getOffice() {
    return this.officeNumber
  }
  getRole() {
    return "Manager"
  }
}

module.exports = Manager;