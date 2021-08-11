const Employee = require('./employee');

class Engineer extends Employee {
	constructor(name, ID, email, github) {
		super(name, ID, email);
		this.github = github;
	}
	getGitHub() {
		return `https://www.github.com/${this.github}`;
	}
	getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer;