const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const HTML = require("./src/HTML");

let role = 'Manager';

// Starts inquirer to prompt the user for input data
const inquirerAnswers = async (input = []) => {
  const inquirerQuestions = [
    {
      name: "name",
      type: "input",
      message: "Team Manager's Name:",
      when: role === 'Manager',
    },
    {
      name: "name",
      type: "input",
      message: "Engineer's Name:",
      when: role === 'Engineer',
    },
    {
      name: "name",
      type: "input",
      message: "Intern's Name:",
      when: role === 'Intern',
    },
    {
      name: "ID",
      type: "input",
      message: "Employee's ID Number:",
    },
    {
      name: "email",
      type: "input",
      message: "Employee's Email Address:",
    },
    {
      name: "office",
      type: "input",
      message: "Employee's Office Number:",
      when: role === 'Manager',
    },
    {
      name: "github",
      type: "input",
      message: "Employee's GitHub:",
      when: role === 'Engineer',
    },
    {
      name: "school",
      type: "input",
      message: "Employee's School:",
      when: role === 'Intern',
    },
    {
      name: "addedEmployee",
      type: "list",
      message: "To Add Another Team Member, Select from the Choices Below:",
      choices: ['Engineer', 'Intern', 'Complete and Generate Page'],
    },
  ];

  const { addedEmployee, ...answers } = await inquirer.prompt(inquirerQuestions);
	switch (role) {
		case 'Manager':
			answers.role = role;
		case 'Engineer':
			answers.role = role;
		case 'Intern':
			answers.role = role;
	}

	const myTeam = [...input, answers];
	role = addedEmployee;

	return addedEmployee !== 'Complete and Generate Page' ? inquirerAnswers(myTeam) : myTeam;

};

const writeFileAsync = util.promisify(fs.writeFile);

const init = async () => {
	const myTeam = await inquirerAnswers()
		.then((myTeam) =>
			writeFileAsync('./dist/page.html', HTML(myTeam))
		)
		.then(() => console.log(`File was created successfully`));
};

init();