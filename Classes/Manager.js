const Employee = require('./Employee.js');


class Manager extends Employee {
  constructor(name, id, officeNumber,  ) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){return this.officeNumber}
  getRole(){return 'Manager'}
}

module.exports = Manager;