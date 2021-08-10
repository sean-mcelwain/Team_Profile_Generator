const Employee = require('./employee');

class Manager extends Employee {
	constructor(name, ID, email, office) {
		super(name, ID, email);
		this.office = office;
	}
	getRole() {
		return 'Manager';
	}
}

module.exports = Manager;