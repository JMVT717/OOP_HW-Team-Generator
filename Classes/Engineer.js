const Employee = require('./Employee.js');


class Engineer extends Employee {
  constructor(name, id, gitHub,  ) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  getGithub(){return this.gitHub}
  getRole(){return 'Engineer'}
}

module.exports = Engineer;