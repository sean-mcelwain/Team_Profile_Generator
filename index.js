// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// Starts inquirer to prompt the user for input data
inquirer.prompt([
  {
    name: "manager_name",
    type: "input",
    message: "Team Manager's Name:",
  },
  {
    name: "manager_ID",
    type: "input",
    message: "Employee's ID Number:",
  },
  {
    name: "manager_email",
    type: "input",
    message: "Employee's Email Address:",
  },
  {
    name: "manager_office",
    type: "input",
    message: "Employee's Office Number:",
  },

 {
    name: "employee00_profession",
    type: "rawlist",
    message: "To Add Another Team Member, Select from the Choices Below:",
    choices: ['Engineer', 'Intern'],
  },
  {
    name: "employee00_name",
    type: "input",
    message: "Team Manager's Name:",
  },
  {
    name: "employee00_ID",
    type: "input",
    message: "Employee's ID Number:",
  },
  {
    name: "employee00_email",
    type: "input",
    message: "Employee's Email Address:",
  },
  {
    name: "employee00_github",
    type: "input",
    message: "Employee's Office Number:",
  },

  {
    name: "employee01_profession",
    type: "rawlist",
    message: "To Add Another Team Member, Select from the Choices Below:",
    choices: ['Engineer', 'Intern'],
  },
  {
    name: "employee01_name",
    type: "input",
    message: "Team Manager's Name:",
  },
  {
    name: "employee01_ID",
    type: "input",
    message: "Employee's ID Number:",
  },
  {
    name: "employee01_email",
    type: "input",
    message: "Employee's Email Address:",
  },
  {
    name: "employee01_github",
    type: "input",
    message: "Employee's Office Number:",
  },
    {
    name: "employee02_profession",
    type: "rawlist",
    message: "To Add Another Team Member, Select from the Choices Below:",
    choices: ['Engineer', 'Intern'],
  },
  {
    name: "employee02_name",
    type: "input",
    message: "Team Manager's Name:",
  },
  {
    name: "employee02_ID",
    type: "input",
    message: "Employee's ID Number:",
  },
  {
    name: "employee02_email",
    type: "input",
    message: "Employee's Email Address:",
  },
  {
    name: "employee02_github",
    type: "input",
    message: "Employee's Office Number:",
  },
  {
    name: "employee03_profession",
    type: "rawlist",
    message: "To Add Another Team Member, Select from the Choices Below:",
    choices: ['Engineer', 'Intern'],
  },
  {
    name: "employee03_name",
    type: "input",
    message: "Team Manager's Name:",
  },
  {
    name: "employee03_ID",
    type: "input",
    message: "Employee's ID Number:",
  },
  {
    name: "employee03_email",
    type: "input",
    message: "Employee's Email Address:",
  },
  {
    name: "employee03_github",
    type: "input",
    message: "Employee's Office Number:",
  },

  
  ])

  .then((answer) => {

    const managerName = answer.manager_name;
    const managerID = answer.manager_ID;
    const managerEmail = answer.manager_email;
    const managerOfficeNo = answer.manager_office;

    const managerCard = "<div class='card-item'> \n"
                        + "<div class='card-item-heading'>" + managerName + "<br> Manager</div> \n"
                        + "<div class='card-item-body'> \n"
                          + "<div class='card-item-p'>ID: " + managerID + "</div> \n"
                          + "<div class='card-item-p'>Email: " + managerEmail + "</div> \n"
                          + "<div class='card-item-p'>Office #: " + managerOfficeNo + "</div> \n"
                        + "</div> \n"
                        + "</div> \n";

    const employee00Name = answer.employee00_name;
    const employee00ID = answer.employee00_ID;
    const employee00Email = answer.employee00_email;
    const employee00GitHub = answer.employee00_github;
    const employee00Profession = answer.employee00_profession;

    const employee00Card = "<div class='card-item'> \n"
                          + "<div class='card-item-heading'>" + employee00Name + "<br>" + employee00Profession +"</div> \n"
                          + "<div class='card-item-body'> \n"
                            + "<div class='card-item-p'>ID: " + employee00ID + "</div> \n"
                            + "<div class='card-item-p'>Email: " + employee00Email + "</div> \n"
                            + "<div class='card-item-p'>GitHub: " + employee00GitHub + "</div> \n"
                          + "</div> \n"
                          + "</div> \n";
    
    const employee01Name = answer.employee01_name;
    const employee01ID = answer.employee01_ID;
    const employee01Email = answer.employee01_email;
    const employee01GitHub = answer.employee01_github;
    const employee01Profession = answer.employee01_profession;
                
    const employee01Card = "<div class='card-item'> \n"
                          + "<div class='card-item-heading'>" + employee01Name + "<br>" + employee01Profession +"</div> \n"
                          + "<div class='card-item-body'> \n"
                            + "<div class='card-item-p'>ID: " + employee01ID + "</div> \n"
                            + "<div class='card-item-p'>Email: " + employee01Email + "</div> \n"
                            + "<div class='card-item-p'>GitHub: " + employee01GitHub + "</div> \n"
                          + "</div> \n"
                          + "</div> \n";

    const employee02Name = answer.employee02_name;
    const employee02ID = answer.employee02_ID;
    const employee02Email = answer.employee02_email;
    const employee02GitHub = answer.employee02_github;
    const employee02Profession = answer.employee02_profession;
                
    const employee02Card = "<div class='card-item'> \n"
                          + "<div class='card-item-heading'>" + employee02Name + "<br>" + employee02Profession +"</div> \n"
                          + "<div class='card-item-body'> \n"
                            + "<div class='card-item-p'>ID: " + employee02ID + "</div> \n"
                            + "<div class='card-item-p'>Email: " + employee02Email + "</div> \n"
                            + "<div class='card-item-p'>GitHub: " + employee02GitHub + "</div> \n"
                          + "</div> \n"
                          + "</div> \n";


    const employee03Name = answer.employee03_name;
    const employee03ID = answer.employee03_ID;
    const employee03Email = answer.employee03_email;
    const employee03GitHub = answer.employee03_github;
    const employee03Profession = answer.employee03_profession;
                
    const employee03Card = "<div class='card-item'> \n"
                          + "<div class='card-item-heading'>" + employee03Name + "<br>" + employee03Profession +"</div> \n"
                          + "<div class='card-item-body'> \n"
                            + "<div class='card-item-p'>ID: " + employee03ID + "</div> \n"
                            + "<div class='card-item-p'>Email: " + employee03Email + "</div> \n"
                            + "<div class='card-item-p'>GitHub: " + employee03GitHub + "</div> \n"
                          + "</div> \n"
                          + "</div> \n";



// Sets variables for the text sections in the ReadMe file and assigns them the input value

 
// Creates variables for each section of the ReadMe and assigns them string values

const html = "<!DOCTYPE html>\n"
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
                      + "<div class='card-body'> \n"

                        + managerCard
                        + employee00Card
                        + employee01Card
                        + employee02Card
                        + employee03Card


                      + "</div> \n"
                  + "</div> \n"
                + "</div> \n"
              + "</body> \n"
              + "</html> \n";


// Compiles a template ReadMe from the variables above. 

const template = html;

// Creates a function to write ReadMe file using the template
function writeToFile(fileName, data) {
    fs.writeFile('page.html', template, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}

writeToFile();
});