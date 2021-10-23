const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); // pass these into the shape class 
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"
  }
}

module.exports = Intern;