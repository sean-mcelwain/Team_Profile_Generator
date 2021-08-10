const Manager = require('../lib/manager');
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

// Sets out the non-dynamic HTML sections
const head = "<!DOCTYPE html>\n"
             + "<html lang='en'>\n"
             + "<head> \n"
                + "<meta charset='UTF-8' />\n <meta name='viewport' content='width=device-width, initial-scale=1.0' /> \n <meta http-equiv='X-UA-Compatible' content='ie=edge' /> \n"
                + "<title>Homework 10</title> \n"
                + "<style>\n"
                  + "body {font-family: sans-serif; background-color: #e0e0e0; padding: 20px;} \n"
                  + ".card {background-color: hsl(0, 0%, 100%); box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px; color: hsl(206, 17%, 28%); font-size: 18px; margin: 0 auto; max-width: 810px; border-radius: 5px;} \n"
                  + ".card-header {background-color: rgb(232, 71, 86); text-align: center; padding: 10px; color: white; border-top-left-radius: 5px; border-top-right-radius: 5px;} \n"
                  + ".card-body {padding: 10px;} \n"
                  + ".card-item{width: 250px; box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px 0px; background-color: rgba(211, 211, 211, 0.315); border-radius: 5px; margin: 5px; display: inline-table;} \n"
                  + ".card-item-heading{font-size: 20px; background-color:rgb(0, 119, 247); color: white; padding: 8px; border-top-left-radius: 5px; border-top-right-radius: 5px;} \n"
                  + ".card-item-body {padding: 10px; border-radius: 5px;} \n"
                  + ".card-item-p{font-size: 15px; margin-top: 3px; padding: 7px; box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px; background-color: white;} \n"
                + "</style> \n"
             + "</head> \n"
             + "<body> \n"
                + "<div class='wrapper'> \n"
                   + "<div class='card'> \n"
                      + "<div class='card-header'> \n"
                        + "<h2>My Team</h2> \n"
                      + "</div> \n"
                      + "<div class='card-body'> \n";
  
const foot =            "</div> \n"
                   + "</div> \n"
	            + "</div> \n"
	         + "</body> \n"
	         + "</html> \n";

// Functions to generate individual cards for the employees based on role
function generateManagerCard(event) {
	const manager = new Manager(event.name, event.ID, event.email, event.office);
	let name = manager.getName();
	let role = manager.getRole();
	let id = manager.getId();
	let email = manager.getEmail();
	let office = manager.office;

	return `<div class='card-item'> \n
              <div class='card-item-heading'>${name}<br>${role}</div> \n
              <div class='card-item-body'> \n
                <div class='card-item-p'>ID: ${id}</div> \n
				<div class='card-item-p'>Email: ${email}</div> \n
				<div class='card-item-p'>Office Number: ${office}</div> \n
			  </div> \n
			</div> \n
 `;
}

function generateEngineerCard(event) {
	const engineer = new Engineer(event.name, event.ID, event.email, event.github);
	let name = engineer.getName();
	let role = engineer.getRole();
	let id = engineer.getId();
	let email = engineer.getEmail();
	let github = engineer.getGitHub();

	return `<div class='card-item'> \n
              <div class='card-item-heading'>${name}<br>${role}</div> \n
              <div class='card-item-body'> \n
                <div class='card-item-p'>ID: ${id}</div> \n
				<div class='card-item-p'>Email: ${email}</div> \n
				<div class='card-item-p'>GitHub Profile: ${github}</div> \n
			  </div> \n
			</div> \n
 `;
}

function generateInternCard(event) {
	const intern = new Intern(event.name, event.ID, event.email, event.school);
	let name = intern.getName();
	let role = intern.getRole();
	let id = intern.getId();
	let email = intern.getEmail();
	let school = intern.getSchool();

	return `<div class='card-item'> \n
              <div class='card-item-heading'>${name}<br>${role}</div> \n
              <div class='card-item-body'> \n
                <div class='card-item-p'>ID: ${id}</div> \n
				<div class='card-item-p'>Email: ${email}</div> \n
				<div class='card-item-p'>School: ${school}</div> \n
		      </div> \n
            </div> \n
`;
}

// Function to assemble the sections of the HTML page based on the user input
function HTML(myTeam) {
	let cards = ``;
	myTeam.forEach((event) => {
		if (event.role === 'Manager') {
			cards += `${generateManagerCard(event)}`;
		}
		if (event.role === 'Engineer') {
			cards += `${generateEngineerCard(event)}`;
		}
		if (event.role === 'Intern') {
			cards += `${generateInternCard(event)}`;
		}
	});
	return head + cards + foot;
}

module.exports = HTML;
